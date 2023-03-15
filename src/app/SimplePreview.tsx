'use client';
import { useEffect, useState } from 'react';
import { Asset, Item } from '@lingo-app/node';
import styled from 'styled-components';

type Props = {
  character: Asset | undefined;
  object: Asset | undefined;
};

const DIV = styled.div`
  width: 50%;
  height: 100vh;
  /* background: #dddddd; */
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-weight: 700;
    background-color: var(--primary);
    color: white;
    border-radius: 8px;
    transition: background-color 200ms ease;

    &:hover {
      background-color: var(--primaryHover);
    }
    &:disabled {
      opacity: 50%;
    }
  }

  .preview {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    height: 500px;
    padding: 24px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    img {
      width: 50%;
      height: 100%;
    }
  }
  a {
    color: var(--primary);
    transition: color 200ms ease;

    &:hover {
      color: var(--primaryHover);
    }
  }
`;

export default function Preview({ character, object }: Props) {
  const [savedImage, setSavedImage] = useState<Item | 'loading'>();

  async function handleClick() {
    setSavedImage('loading');
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

  return (
    <DIV>
      <div className='preview'>
        <img src={(character as any).permalink} alt='' />
        <img src={(object as any).permalink} alt='' />
      </div>

      <button
        onClick={handleClick}
        disabled={savedImage == 'loading' ? true : false}
      >
        Save to Lingo
      </button>
      {(() => {
        if (savedImage && savedImage != 'loading') {
          return (
            <a
              target='_blank'
              href={`https://lingo.lingoapp.com/a/${savedImage.id}`}
            >
              View in lingo
            </a>
          );
        } else if (savedImage == 'loading') {
          return <p>Loading...</p>;
        }
      })()}
    </DIV>
  );
}
