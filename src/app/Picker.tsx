"use client";

import { Kit } from "@lingo-app/node";
import React, { useCallback } from "react";

type Props = {
    kits: Kit[];
}
const Picker: React.FC<Props> =({ kits }) => {
  const [character, setCharacter] = React.useState<string>();
  const [object, setObject] = React.useState<string>();

  const saveImage = useCallback(() => {
    fetch("/api/save", {
      method: "POST",
      body: JSON.stringify({
        character,
        object,
      }),
    });
  }, [character, object]);

  return (
    <>
    <div style={{display: "flex"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        {kits.map((k) => (
          <button key={k.kitId} onClick={() => setCharacter(k.name)}>
            {k.name}
          </button>
        ))}
        <p>Character: {character}</p>
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
        {kits.map((k) => (
          <button key={k.kitId} onClick={() => setObject(k.name)}>
            {k.name}
          </button>
        ))}
        <p>Object: {object}</p>
      </div>
    </div>
    <button onClick={saveImage}>Save</button>
    </>
  );
}
export default Picker;