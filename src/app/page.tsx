import React from 'react';
import lingo, { Asset, ItemType, Kit } from '@lingo-app/node';
import App from './App';

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
  const characters = await getSectionAssets('RG72q5');
  const objects = await getSectionAssets('Pww1EY');

  return <App data={{ characters, objects }} />;
}
