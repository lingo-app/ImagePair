'use client';
import { useEffect, useState } from 'react';
import { Asset, Item } from '@lingo-app/node';
import styled from 'styled-components';

type Props = {
  character: Asset | undefined;
  object: Asset | undefined;
};

const DIV = styled.div`
  width: 100%;

  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: blue;
    color: white;
  }

  .preview {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    img {
      width: auto;
      height: 600px;
    }
  }
`;

export default function Preview({ character, object }: Props) {
  const [savedImage, setSavedImage] = useState<Item>();

  async function handleClick() {
    const res = await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify({
        character: character?.id,
        object: object?.id,
      }),
    });
    const { item } = await res.json();
    setSavedImage(item);
  }

  if (savedImage) {
    // If an image has been saved, show a success message and a link to the item
    return (
      <>
        <p>Saved item</p>
        <a
          target='_blank'
          href={`https://lingo.lingoapp.com/a/${savedImage.id}`}
        >
          View in lingo
        </a>
      </>
    );
  }

  return (
    <DIV>
      <div className='preview'>
        <img src={(character as any).permalink} alt='' />
        <img src={(object as any).permalink} alt='' />
      </div>

      <button onClick={handleClick}>Save to Lingo</button>
    </DIV>
  );
}
