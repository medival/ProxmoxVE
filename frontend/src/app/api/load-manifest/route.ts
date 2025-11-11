import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";

// Sanitize filename/app name to prevent directory traversal
function sanitizeName(name: string): string {
  return name.replace(/[^a-zA-Z0-9_-]/g, "-");
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const appName = searchParams.get("appName");
    const fileName = searchParams.get("fileName");

    // Validate input
    if (!appName || !fileName) {
      return NextResponse.json(
        { error: "Missing required parameters: appName, fileName" },
        { status: 400 },
      );
    }

    // Sanitize inputs to prevent directory traversal
    const sanitizedAppName = sanitizeName(appName);
    const sanitizedFileName = sanitizeName(fileName);

    // Build the file path
    const filePath = path.join(
      process.cwd(),
      "public",
      "manifests",
      sanitizedAppName,
      sanitizedFileName,
    );

    // Check if file exists
    try {
      await fs.access(filePath);
    }
    catch {
      // File doesn't exist - return empty content
      return NextResponse.json({
        success: true,
        content: "",
        exists: false,
      });
    }

    // Read the file
    const content = await fs.readFile(filePath, "utf-8");

    return NextResponse.json({
      success: true,
      content,
      exists: true,
    });
  }
  catch (error) {
    console.error("Error loading manifest:", error);
    return NextResponse.json(
      { error: "Failed to load manifest file" },
      { status: 500 },
    );
  }
}
