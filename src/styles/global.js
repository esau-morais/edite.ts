import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif
  }

  body,
  html,
  #root {
    // Size
    width: 100%;
    min-height: 100%;

    // Colors
    background-color: var(--primary-background);

    // Display
    display: flex;
    flex-direction: column;
    align-items: center;

    // Smooth scrolling
    scroll-behavior: smooth
  }

  :root {
    // Colors
    --primary-background: #1F1F1F;
    --secondary-background: #010101;
    --primary-foreground: #FFFFFF;
    --secondary-foreground: #F5F5F5;
    --primary-blue: #116df7;
    --secondary-blue: #18a0fb;
    --primary-yellow: #F3DE1E;
    --box-shadow: drop-shadow(0 0 1.25rem rgba(24, 160, 251, 0.25));

    // Spacement
    --margin: 1rem;
    --margin2x: 2rem;
    --margin3x: 3rem;
    --margin4x: 4rem;
    --margin6x: 6rem;
    --button-padding: 0.875rem 0.625rem;

    // Font
    --font-base: 500 1.125rem/1.375rem Montserrat;
    --font-h1: 700 4rem/4.875rem Montserrat;
    --font-h2: 600 3rem/3.625rem Montserrat;

    --primary-border-radius: 0.75rem;
  }

  // Reset CSS
  li {
    list-style: none // Remove list bullets
  }

  a {
    text-decoration: none; // Remove underline
    color: var(--secondary-foreground);
    transition: color .2s ease-in-out;
    &:hover {
      color: var(--secondary-blue)
    }
  }

  a,
  button,
  select {
    cursor: pointer
  }

  button,
  select {
    border-style: none // Remove auto border
  }

  // Accessbility
  button:focus,
  select:focus,
  a:focus {
    outline: 1px dashed var(--primary-blue)
  }

  // Spinner animations
  @keyframes spinner-bounce {
    0%, 80%, 100% {
      transform: scale(0)
    }
    40% {
      transform: scale(1)
    }
  }
`;

export default Global;
