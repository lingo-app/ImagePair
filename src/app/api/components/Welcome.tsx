import styled from "styled-components";

export default function Welcome() {
  return (
    <Wrapper>
      <h1>Weleme to Image Pair</h1>
      <h3>A demo app for the Lingo API</h3>

      <p>Select a chacter and object to the left to get started.</p>

      <p>
        You can view the connected kit in{" "}
        <a
          href="https://lingo.lingoapp.com/k/Image-Pair-RkDAz6"
          target="_blank"
        >
          Lingo
        </a>{" "}
        and all of the source code on{" "}
        <a href="https://github.com/lingo-app/ImagePair" target="_blank">
          GitHub.
        </a>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  gap: 16px;
`;
