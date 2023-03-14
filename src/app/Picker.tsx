<<<<<<< HEAD
"use client";

import { Asset, Item, Kit } from "@lingo-app/node";
import React, { useCallback, useState } from "react";

type Props = {
    characters: Asset[];
    objects: Asset[];
}
const Picker: React.FC<Props> =({ characters, objects }) => {
=======
'use client';

import { Asset, Item, Kit } from '@lingo-app/node';
import React, { useCallback, useState } from 'react';

type Props = {
  characters: Asset[];
  objects: Asset[];
};

const Picker: React.FC<Props> = ({ characters, objects }) => {
>>>>>>> 7f48b21 (first commit for UI update)
  const [character, setCharacter] = useState<Asset>();
  const [object, setObject] = useState<Asset>();
  const [savedItem, setSavedItem] = useState<Item>();

  const saveImage = useCallback(async () => {
<<<<<<< HEAD

    if (!character || !object) {
        return;
    }

    const res = await fetch("/api/save", {
      method: "POST",
=======
    if (!character || !object) {
      return;
    }

    const res = await fetch('/api/save', {
      method: 'POST',
>>>>>>> 7f48b21 (first commit for UI update)
      body: JSON.stringify({
        character: character.id,
        object: object.id,
      }),
    });

<<<<<<< HEAD
    const json = await res.json()
    console.log(json);
    setSavedItem(json.item);

=======
    const json = await res.json();
    console.log(json);
    setSavedItem(json.item);
>>>>>>> 7f48b21 (first commit for UI update)
  }, [character, object]);

  if (savedItem) {
    // If an image has been saved, show a success message and a link to the item
<<<<<<< HEAD
    return <>
    <p>Saved item</p>
    <a target="_blank" href={`https://lingo.lingoapp.com/a/${savedItem.id}`}>View in lingo</a>
    </>
=======
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
>>>>>>> 7f48b21 (first commit for UI update)
  }

  return (
    <>
<<<<<<< HEAD
    <div style={{display: "flex"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        {characters.map((asset) => (
          <button key={asset.id} onClick={() => setCharacter(asset)}>
            {asset.name}
          </button>
        ))}
        <p>Character: {character?.name}</p>
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
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
}
export default Picker;
=======
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
>>>>>>> 7f48b21 (first commit for UI update)
