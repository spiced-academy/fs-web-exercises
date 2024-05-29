import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary-dark: #2e016d;
    --color-primary: #3f0097;
    --color-primary-light: #8236ff;
    --color-secondary-dark: #38ccda;
    --color-secondary: #7fd9e2;
    --color-accent: #ffd15d;
    --color-black-light: #303030;
    --color-black: #000000;
    --color-white: #ffffff;
    --color-grey-dark: #b6b9c2;
    --color-grey-light: #f5f6f6;

    --gap: 20px;
  }
    
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: grid;
    margin: auto;
    font-family: system-ui;
    place-items: center;
    min-height: 100vh;
    max-width: 50rem;
    background: var(--color-primary);
    color: var(--color-white)
  }

  button {
    appearance: none;
    border: none;
    background: var(--color-white);
    font-size: larger;
    padding: 0.5rem 1rem;
    box-shadow: 0px 1px 5px -2px var(--color-white);
  } 

  a {
    text-decoration: none;
    color: var(--color-primary-dark);
    display: inline-block;
    border: none;
    background: var(--color-white);
    font-size: larger;
    padding: 0.5rem 1rem;
    box-shadow: 0px 1px 5px 2px var(--color-white);
  } 

  a:visited {
    color: var(--color-secondary-dark);
  }

  ul {
    list-style-type: none;
    display: grid;
    gap: 1rem;
    justify-items: center;
    padding: 0;
  }

  li {
    width: 100%;
  }

  li a {
    width: 100%;
  }

  div:has(h1) {
    display: flex;
    flex-direction: column;

  }

  div:has(h1) button {
    width: fit-content;
    align-self: center;
  }
`;
