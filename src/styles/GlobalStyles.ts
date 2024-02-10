'use client'

import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  // CSS Reset
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  img {
    border-style: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    border: none;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: button;
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    appearance: textfield;
    -webkit-appearance: textfield;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  // Global CSS
  @font-face {
    font-family: 'CircularStd';
    src: url('/fonts/Circular-Std-Book.ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url('/fonts/Circular-Std-Medium.ttf');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url('/fonts/Circular-Std-Bold.ttf');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.colors.background};
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  ul,
  ol,
  li,
  strong {
    font-family: 'CircularStd', sans-serif;
  }
`

export default GlobalStyles
