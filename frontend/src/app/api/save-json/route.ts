import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { ScriptSchema } from "@/app/json-editor/_schemas/schemas";

export const dynamic = "force-dynamic";

// Sanitize slug to prevent directory traversal
function sanitizeSlug(slug: string): string {
  return slug.replace(/[^a-zA-Z0-9_-]/g, "-");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { json } = body;

    // Validate input
    if (!json) {
      return NextResponse.json(
        { error: "Missing required field: json" },
        { status: 400 },
      );
    }

    // Validate against schema
    const validation = ScriptSchema.safeParse(json);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid JSON schema", details: validation.error.errors },
        { status: 400 },
      );
    }

    const { slug } = json;

    // Sanitize slug to prevent directory traversal
    const sanitizedSlug = sanitizeSlug(slug);

    // Build the target file path
    const jsonDir = path.join(process.cwd(), "public", "json");
    const filePath = path.join(jsonDir, `${sanitizedSlug}.json`);

    // Ensure the directory exists
    await fs.mkdir(jsonDir, { recursive: true });

    // Write the file with pretty formatting
    await fs.writeFile(filePath, JSON.stringify(json, null, 2), "utf-8");

    return NextResponse.json({
      success: true,
      path: `/public/json/${sanitizedSlug}.json`,
    });
  }
  catch (error) {
    console.error("Error saving JSON:", error);
    return NextResponse.json(
      { error: "Failed to save JSON file" },
      { status: 500 },
    );
  }
}
