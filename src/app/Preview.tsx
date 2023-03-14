'use client';
import { useEffect, useState } from 'react';
import { Asset } from '@lingo-app/node';
import styled from 'styled-components';

type Props = {
  character: Asset | undefined;
  object: Asset | undefined;
};

const DIV = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: blue;
    color: white;
  }
`;

export default function Preview({ character, object }: Props) {
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    async function getImage() {
      const res = await fetch('/api/preview', {
        method: 'POST',
        body: JSON.stringify({
          character: character?.id,
          object: object?.id,
        }),
      });
      let str: string = await res.json(); // './public/created/<filename>'
      return setImageSource(str);
    }
    getImage();
  }, [character, object]);

  async function handleClick() {
    const res = await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify({
        imageSource: imageSource,
        character: character,
        object: object,
      }),
    });
  }

  return (
    <DIV>
      <img alt='' src={`${imageSource.replace('./public', '')}`} />
      <button onClick={handleClick}>Save to Lingo</button>
    </DIV>
  );
}
