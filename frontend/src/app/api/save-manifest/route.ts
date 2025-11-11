import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";

// Sanitize filename/app name to prevent directory traversal
function sanitizeName(name: string): string {
  return name.replace(/[^a-zA-Z0-9_-]/g, "-");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { appName, fileName, content } = body;

    // Validate input
    if (!appName || !fileName || content === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: appName, fileName, content" },
        { status: 400 },
      );
    }

    // Sanitize inputs to prevent directory traversal
    const sanitizedAppName = sanitizeName(appName);
    const sanitizedFileName = sanitizeName(fileName);

    // Build the target directory and file path
    const manifestDir = path.join(process.cwd(), "public", "manifests", sanitizedAppName);
    const filePath = path.join(manifestDir, sanitizedFileName);

    // Ensure the directory exists
    await fs.mkdir(manifestDir, { recursive: true });

    // Write the file
    await fs.writeFile(filePath, content, "utf-8");

    return NextResponse.json({
      success: true,
      path: `/public/manifests/${sanitizedAppName}/${sanitizedFileName}`,
    });
  }
  catch (error) {
    console.error("Error saving manifest:", error);
    return NextResponse.json(
      { error: "Failed to save manifest file" },
      { status: 500 },
    );
  }
}
