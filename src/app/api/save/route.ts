import lingo from "@lingo-app/node";
import { NextResponse } from "next/server";

lingo.setup(
  Number(process.env.LINGO_SPACE_ID),
  process.env.LINGO_API_KEY as string
);


export async function POST(request: Request) {

  const {character, object} = await request.json();

  // const char = await lingo.downloadAsset(character)
  // const object = await lingo.downloadAsset(object);
  // Generate an image with these files

  // This is a placeholder asset creation
  const { item } = await lingo.createColorAsset("#AABBCC", {
    notes: `${character} -- ${object}`
  }, {kitId: "C37D7B3F-1B99-49FA-9A53-259384FB846F", sectionId: "56ED8977-BB79-49A5-B6E3-0137AB839376"})

  return NextResponse.json({item });
}
