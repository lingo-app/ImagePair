'use client';

import { Asset, Item, Kit } from '@lingo-app/node';
import React, { useCallback, useState } from 'react';

type Props = {
  characters: Asset[];
  objects: Asset[];
};

const Picker: React.FC<Props> = ({ characters, objects }) => {
  const [character, setCharacter] = useState<Asset>();
  const [object, setObject] = useState<Asset>();
  const [savedItem, setSavedItem] = useState<Item>();

  const saveImage = useCallback(async () => {
    if (!character || !object) {
      return;
    }

    const res = await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify({
        character: character.id,
        object: object.id,
      }),
    });

    const json = await res.json();
    console.log(json);
    setSavedItem(json.item);
  }, [character, object]);

  if (savedItem) {
    // If an image has been saved, show a success message and a link to the item
    return (
      <>
        <p>Saved item</p>
        <a
          target='_blank'
          href={`https://lingo.lingoapp.com/a/${savedItem.id}`}
        >
          View in lingo
        </a>
      </>
    );
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {characters.map((asset) => {
            console.log(asset);
            return (
              <div key={asset.id}>
                <img src={(asset as any).thumbnails['1232']} alt='' />
                <button key={asset.id} onClick={() => setCharacter(asset)}>
                  {asset.name}
                </button>
              </div>
            );
          })}
          <p>Character: {character?.name}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {objects.map((asset) => (
            <button key={asset.id} onClick={() => setObject(asset)}>
              {asset.name}
            </button>
          ))}
          <p>Object: {object?.name}</p>
        </div>
      </div>
      <button onClick={saveImage}>Save</button>
    </>
  );
};
export default Picker;
