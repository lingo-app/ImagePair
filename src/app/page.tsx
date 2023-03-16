import React from "react";
import lingo, { Asset, ItemType, Kit } from "@lingo-app/node";
import App from "./api/components/App";

async function getSectionAssets(id: string): Promise<Asset[]> {
  const section = await lingo.fetchSection(id);
  return section.items
    .filter((item) => item.type === ItemType.Asset)
    .map((item) => item.asset) as Asset[];
}

// Locally these environment veriables are set with a .env.local file. On the server they are defined as environment variables in the AWS amplify console.
// Using environment variables ensures that our keys are not committed to the repositoy.
lingo.setup(
  Number(process.env.LINGO_SPACE_ID),
  process.env.LINGO_API_KEY as string
);

export default async function Home() {
  // This component is a next server component, it will run on the server which allows us to
  // fetch data from lingo without exposing  our API key in frontend code
  const characters = await getSectionAssets("RG72q5");
  const objects = await getSectionAssets("Pww1EY");

  // App is marked with the `use client` directive at the top of the file. This means that the file will be rendered on the client.
  // The lingo data we just fetched on the server will be passed to the client to be rendered.`
  return <App data={{ characters, objects }} />;
}
