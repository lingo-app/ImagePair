'use client';
import { useState } from 'react';
import ImageColumn from './ImageColumn';
import { Asset } from '@lingo-app/node';
import styled from 'styled-components';
import GlobalCSS from './GlobalCSS';
import Preview from './Preview';
import SimplePreview from './SimplePreview';

const DIV = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;

  .columns {
    width: 50%;
    display: flex;

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
          <div className='separator'></div>
          <ImageColumn
            data={data.objects}
            selected={object}
            setSelected={setObject}
          />
        </div>
        {/* <Preview character={character} object={object} /> */}
        <SimplePreview character={character} object={object} />
      </DIV>
    </>
  );
}

export default App;
