'use client';
import { Asset } from '@lingo-app/node';
import styled from 'styled-components';

type Props = {
  data: Asset[];
  selected: Asset | undefined;
  setSelected: Function;
};

const DIV = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 100vh;
  scrollbar-width: 2px;
  padding: 16px;
  gap: 16px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected {
      border: solid 5px blue;
    }
  }
`;

export default function ImageColumn({ selected, setSelected, data }: Props) {
  return (
    <DIV>
      {data.map((obj) => (
        <button
          key={obj.id}
          onClick={() => setSelected(obj)}
          className={obj.id == selected?.id ? 'selected' : ''}
        >
          <img src={(obj as any).permalink} alt='' />
        </button>
      ))}
    </DIV>
  );
}
