import { useCallback, useEffect, useState } from "react";
import { Asset, Item } from "@lingo-app/node";
import styled from "styled-components";

type Props = {
  character: Asset | undefined;
  object: Asset | undefined;
  onReset: () => void;
};

export default function Preview({ character, object, onReset }: Props) {
  const [savedImage, setSavedImage] = useState<Item | "loading">();

  const saveImage = useCallback(async () => {
    if (!character || !object) {
      alert("Select a character and object to save");
      return;
    }
    // Here we are calling our simple API save endpoint in src/app/api/save/route.tsx
    setSavedImage("loading");
    const res = await fetch("/api/save", {
      method: "POST",
      body: JSON.stringify({
        character: character?.id,
        object: object?.id,
      }),
    });
    const { item } = await res.json();
    setSavedImage(item);
  }, [character, object]);

  useEffect(() => {
    // Reset the state if new character or object are selected
    if (savedImage) {
      setSavedImage(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character, objectg]);

  function renderButtons() {
    console.log(savedImage);
    // While the image is being saved, Render a loading button
    if (savedImage == "loading") {
      return (
        <button className="primary" disabled>
          Saving to Lingo...
        </button>
      );
    } else if (savedImage) {
      // When the image has been saved, render a button to view in lingo
      return (
        <>
          <a
            className="primary"
            target="_blank"
            href={`https://lingo.lingoapp.com/a/${savedImage?.id}`}
          >
            View in lingo
          </a>
          <a onClick={onReset}>Reset</a>
        </>
      );
    } else {
      // Render a save button
      return (
        <>
          <button className="primary" onClick={saveImage}>
            Save to Lingo
          </button>
          <a onClick={onReset}>Reset</a>
        </>
      );
    }
  }

  return (
    <Wrapper>
      <h3>Preview</h3>
      <PreviewImage>
        <img src={character?.permalink} alt={character?.name} />
        <img src={object?.permalink} alt={object?.name} />
      </PreviewImage>
      {renderButtons()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-width: 480px;
  height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const PreviewImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: auto;
  position: relative;
  padding: 24px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  aspect-ratio: 2/1;
  img {
    height: 100%;
  }
`;
