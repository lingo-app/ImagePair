import { createGlobalStyle } from 'styled-components';

// styled.div
// createGlobalStyle

const GlobalCSS = createGlobalStyle`
  :root {
    --grey: #ececec;
  }

  * {
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 1;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Inter', sans-serif;
  }

  html {
    padding:0;
    margin:0px;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0px !important;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  #App {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

  span,
  div,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    letter-spacing: inherit;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  .btn {
    padding: 24px 48px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 2px;
    color: black;
    transition: color 200ms ease;
    &::after {
      width: 500%;
      aspect-ratio: 1/ 1;
      top: -200%;
      left: -200%;
      z-index: -1;
      /* border-radius: 130%; */
      position: absolute;
      content: '';
      background-size: cover;
      animation: animate 2500ms linear 0ms infinite normal forwards;


      @keyframes animate {
        0% {
          transform: rotate(0deg);
          transform-origin: center center;
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    &:hover {
      color: white;
      &::after {
        animation: animate 1000ms linear 0ms infinite reverse forwards;
      }
    }
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }

  input,
  textarea {
    font-weight: 400;
    &:focus {
      outline-offset: 0;
    }
  }

  /* Animated Routes ************************************************************/
  .page {
    position: absolute;
    left: 0px;
    right: 0px;

    &-enter {
      opacity: 0;
    }

    &-enter-active {
      opacity: 1;
      transition: opacity 500ms;
    }

    &-exit {
      opacity: 1;
    }

    &-exit-active {
      opacity: 0;
      transition: opacity 500ms;
    }
  }

  /* Updated Typography *********************************************************/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    color: inherit;
  }

  p,
  li,
  input,
  label,
  textarea {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    line-height: 150%;
  }
  input,
  textarea {
    font-weight: 400;
  }

  button,
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }

  .overline {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: .5px;
  }

  .name,
  .role {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.25px;
  }
  .role {
    font-weight: 400;
    color: #d2d2d2;
  }

  .tiny {
     font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.25px;
  }

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 80px;
    letter-spacing: -2px;
  }

  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.25px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.5px;
  }
`;

export default GlobalCSS;
