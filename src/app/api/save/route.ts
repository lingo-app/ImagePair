import lingo from "@lingo-app/node";
import { NextResponse } from "next/server";
import sharp from "sharp";
import fs from "fs";

lingo.setup(
  Number(process.env.LINGO_SPACE_ID),
  process.env.LINGO_API_KEY as string
);

export async function POST(request: Request) {
  const { character, object } = await request.json();

  const characterFile = await lingo.downloadAsset(character, {
    type: "PNG",
    dimensions: "600",
  });
  const objectFile = await lingo.downloadAsset(object, {
    type: "PNG",
    dimensions: "600",
  });
  // Generate an image with these files

  const img = await sharp({
      create: {
        width: 1200,
        height: 600,
        channels: 4,
        background: "transparent"
      },
    })
    .composite([
      { input: characterFile, left: 0, top: 0 },
      {
        input: objectFile,
        left: 600,
        top: 0,
      },
    ])
    .png()
    .toFile("./image.png");

  // This is a placeholder asset creation
  const { item } = await lingo.createFileAsset(
    "./image.png",
    {
      notes: `${character} -- ${object}`,
    },
    {
      kitId: "C37D7B3F-1B99-49FA-9A53-259384FB846F",
      sectionId: "56ED8977-BB79-49A5-B6E3-0137AB839376",
    }
  );
  // Cleanup the temp file
  fs.rmSync("./image.png");

  return NextResponse.json({});
}
