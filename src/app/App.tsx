'use client';
import { useState } from 'react';
import ImageColumn from './ImageColumn';
import { Asset } from '@lingo-app/node';
import styled from 'styled-components';
import GlobalCSS from './GlobalCSS';
import Preview from './Preview';
import SimplePreview from './Preview';

const DIV = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  height: 100%;

  .columns {
    width: 60%;
    min-width: 400px;
    display: flex;
    gap: 0px;
    padding: 0px;
    height: 100vh;
    overflow: hidden;

    .separator {
      width: 1px;
      background: black;
    }
  }
`;

type AppProps = {
  data: {
    characters: Asset[];
    objects: Asset[];
  };
};

function App({ data }: AppProps) {
  const [character, setCharacter] = useState<Asset>(data.characters[0]);
  const [object, setObject] = useState<Asset>(data.objects[0]);
  return (
    <>
      <GlobalCSS />
      <DIV>
        <div className='columns'>
          <ImageColumn
            data={data.characters}
            selected={character}
            setSelected={setCharacter}
          />
          <ImageColumn
            data={data.objects}
            selected={object}
            setSelected={setObject}
          />
        </div>
        <SimplePreview character={character} object={object} />
      </DIV>
    </>
  );
}

export default App;
