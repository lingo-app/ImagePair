import lingo from '@lingo-app/node';
import { NextResponse } from 'next/server';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

lingo.setup(
  Number(process.env.LINGO_SPACE_ID),
  process.env.LINGO_API_KEY as string
);

export async function POST(request: Request) {
  const { character, object } = await request.json();

  const characterFile = await lingo.downloadAsset(character, {
    type: 'PNG',
    dimensions: '600',
  });
  const objectFile = await lingo.downloadAsset(object, {
    type: 'PNG',
    dimensions: '600',
  });

  // Delete existing images files in public/created
  fs.readdir('./public/created', (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join('./public/created', file), (err) => {
        if (err) throw err;
      });
    }
  });

  const imagePath = `./public/created/${character}--${object}.png`;
  await sharp({
    create: {
      width: 1200,
      height: 600,
      channels: 4,
      background: 'transparent',
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
    .toFile(imagePath);

  return NextResponse.json(imagePath);
}
