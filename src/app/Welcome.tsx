import styled from "styled-components";

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

export default function Welcome() {
  return (
    <Wrapper>
      <h1>Weleme to Image Pair</h1>
      <h3>A demo app for the Lingo API</h3>

      <p>Select a chacter and object to the left to get started.</p>
    </Wrapper>
  );
}
