import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  html {
    line-height: 1.5rem;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251/var(--tw-bg-opacity));
  }

  body {
    margin: 0;
    padding: 0;
  }
  
  #root {
    padding-left: 15rem;
    padding-top: 3.5rem;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
