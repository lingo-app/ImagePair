import React from "react";
import lingo, { Asset, ItemType, Kit } from "@lingo-app/node";
import App from "./App";

async function getSectionAssets(id: string): Promise<Asset[]> {
  const section = await lingo.fetchSection(id);
  return section.items
    .filter((item) => item.type === ItemType.Asset)
    .map((item) => item.asset) as Asset[];
}

lingo.setup(
  Number(process.env.LINGO_SPACE_ID),
  process.env.LINGO_API_KEY as string
);

export default async function Home() {
  // This component is a next server component, it will run on the server which allows us to
  // fetch data from lingo without exposing  our API key in frontend code
  const characters = await getSectionAssets("RG72q5");
  const objects = await getSectionAssets("Pww1EY");

  return <App data={{ characters, objects }} />;
}
