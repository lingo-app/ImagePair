"use client";
import { Asset } from "@lingo-app/node";
import styled from "styled-components";

type Props = {
  title: string;
  data: Asset[];
  selected?: Asset;
  setSelected: Function;
};

export default function ImageColumn({
  title,
  selected,
  setSelected,
  data,
}: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ContentWrapper>
        {data.map((obj) => (
          <Button
            key={obj.id}
            onClick={() => setSelected(obj)}
            className={obj.id == selected?.id ? "selected" : ""}
          >
            <img src={obj.permalink} alt="" />
          </Button>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width 100%
`;

const Title = styled.h3`
  width: 100%;
  padding: 16px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100%;
  position: relative;
  gap: 16px;
  padding: 0 16px;
  background: var(--white);

  &::-webkit-scrollbar {
    height: 100%;
    width: 4px;
  }

  &:hover {
    ::-webkit-scrollbar {
      position: relative;
      height: 100%;
      width: 4px;
      background: transparent;
      visibility: visible;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--scrollThumb);
      border-radius: 8px;
      visibility: visible;
      position: absolute;
      left: 0px;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 4px transparent;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: border 200ms ease, box-shadow 200ms ease;
  padding: 8px 0;
  border-radius: 8px;
  min-height: 200px;
  img {
    height: 80%;
  }

  &:nth-child(1) {
    margin-top: 16px;
  }

  &:hover {
    /* border: solid 4px var(--grey); */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 12px;
  }

  &.selected {
    border: solid 4px var(--primary);
  }
`;
