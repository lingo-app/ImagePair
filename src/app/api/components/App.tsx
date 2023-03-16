"use client";
import { useCallback, useState } from "react";
import ImageColumn from "./ImageColumn";
import { Asset } from "@lingo-app/node";
import styled from "styled-components";
import GlobalCSS from "./GlobalCSS";
import Preview from "./Preview";
import Welcome from "./Welcome";

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  height: 100%;
`;

const ColumnWrapper = styled.div`
  width: 60%;
  min-width: 400px;
  display: flex;
  gap: 0px;
  padding: 0px;
  height: 100vh;
  overflow: hidden;
`;

type AppProps = {
  data: {
    characters: Asset[];
    objects: Asset[];
  };
};

function App({ data }: AppProps) {
  const [character, setCharacter] = useState<Asset | undefined>();
  const [object, setObject] = useState<Asset | undefined>();
  const resetState = useCallback(() => {
    setCharacter(undefined);
    setObject(undefined);
  }, []);
  return (
    <>
      <GlobalCSS />
      <AppWrapper>
        <ColumnWrapper>
          <ImageColumn
            title="Characters"
            data={data.characters}
            selected={character}
            setSelected={setCharacter}
          />
          <ImageColumn
            title="Objects"
            data={data.objects}
            selected={object}
            setSelected={setObject}
          />
        </ColumnWrapper>
        {character || object ? (
          <Preview character={character} object={object} onReset={resetState} />
        ) : (
          <Welcome />
        )}
      </AppWrapper>
    </>
  );
}

export default App;
