import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  div {
    font-size: inherit;
    font-weight: normal;
    text-size-adjust: auto;
    overflow-wrap: break-word;
    vertical-align: baseline;

  }

  a {
    text-decoration: none;
    color: inherit;
  }

  iframe {
    border: 0;
  }

  address {
    font: inherit;
  }
`;

export const Container = styled.div`
    max-width: 73.125rem;
    margin-inline: auto;
    width: calc(var(--container-width) * 1%);
`