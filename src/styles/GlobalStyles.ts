import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
  }
  
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
  
  th {
    padding: 0.5rem 0.75rem;
    text-align: left;
  }
  
  table {
    border-collapse: collapse;
    text-indent: 0;
    width: 100%;
    border-spacing: 0;

    --tw-border-opacity: 1;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: rgb(243 244 246/var(--tw-border-opacity));
  }

  tbody tr:nth-child(odd) {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251/var(--tw-bg-opacity));
  }
`;

export default GlobalStyle;
