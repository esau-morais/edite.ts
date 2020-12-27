import styled from 'styled-components';

export const Wrapper = styled.div`
  // Size
  width: 100%;

  // Spacement
  padding: 0.25rem var(--margin4x);

  // Display
  display: flex;
  align-items: center;
  justify-content: center;

  // Colors
  // If the browser doesn't support background-image, use background
  @supports not (background-image: linear-gradient(25deg, #0121ff, #1d4aff, #1e69ff, #0186ff)) {  
    background: linear-gradient(25deg, #0121ff, #1d4aff, #1e69ff, #0186ff);
  }
  background-image: linear-gradient(25deg, #0121ff, #1d4aff, #1e69ff, #0186ff);

  // Content → Center
  div {
    display: inline-flex;
    align-items: inherit;
    justify-content: inherit;
  }
  // First Icon → PH
  div > svg:first-child {
    margin-right: var(--margin)
  }
  // Text
  div > a {
    // Font
    font: var(--font-base);

    // Colors
    color: var(--primary-foreground);
    border-bottom: 1px solid var(--secondary-foreground);

    // Remove default hover/focus color
    &:hover {
      color: var(--secondary-foreground)
    }
    &:focus {
      outline-color: var(--secondary-foreground)
    }
  }

  // Close
  button {
    display: inline-flex;
    // Position → Right
    position: absolute;
    right: var(--margin4x);

    // Change default focus color
    &:focus {
      outline-color: var(--secondary-foreground)
    }
  }
  button:hover > svg {
    fill: var(--secondary-foreground);
    transition: fill .2s ease-in-out;
  }
  button:hover > svg > path {
    stroke: var(--primary-blue);
    transition: stroke .2s ease-in-out
  }

  @media screen and (max-width: 980px) {
    // (Reduce) Spacement
    padding: 0.25rem var(--margin2x);

    button {
      right: var(--margin2x)
    }
  }

  @media screen and (max-width: 740px) {
    // Do not get small
    div > svg:first-child {
      flex: 0 0 auto
    }

    div > a {
      // Remove border at the bottom
      border-bottom: 0
    }

    // If supports line-clamp, create text ellipsis in the 2nd line break
    @supports(-webkit-line-clamp: 2) {
      div > a {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    // If it doesn't, just create a text ellipsis
    @supports not (-webkit-line-clamp: 2) {
      div > a {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    // Change (default) position
    button {
      position: unset
    }
    button > svg {
      margin-left: var(--margin)
    }
  }
`;
