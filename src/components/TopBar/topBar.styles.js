import styled from 'styled-components';

export const Container = styled.nav`
  // Spacement
  padding: 3.5rem var(--margin4x) 0 var(--margin4x);

  // Size
  width: 100%;

  // Display
  display: flex;
  align-items: center;
  justify-content: space-between;

  // Logo → Left
  div.topBar__left {
    flex: 1 1 auto
  }

  // Default: row disposition
  // Items → Middle
  // Select & Button → Right
  ul.topBar__middle,
  div.topBar__right {
    display: inherit;
    align-items: inherit;
  }
  // Select
  select {
    // Spacement
    margin-right: var(--margin);
    padding: 0.5rem;

    // Font
    font: normal 0.875rem/1.25rem Montserrat;

    // Colors
    background-color: var(--secondary-background);
    color: var(--secondary-foreground);

    border-radius: 5px
  }

  @media screen and (max-width: 980px) {
    // (Reduce) Spacement
    padding: var(--margin2x) var(--margin2x) 0 var(--margin2x);

    // After opened: column disposition
    ul.topBar__middle {
      flex-direction: column
    }
  }
`;

export const Items = styled.ul`
  // Default display: row
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-flow: column nowrap;

    // Colors
    background-color: var(--primary-background);

    // Default position: right and hidden
    // After opened: full width, centered, and visible
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    // Size
    height: 100%;
    width: 100%;
    justify-content: center;
  }
`;

export const Item = styled.li`
  // Spacement
  margin-right: 2.25rem;
  &:nth-child(4) {
    margin-right: 0
  }

  // Font
  font: var(--font-base);

  @media screen and (max-width: 980px) {
    margin-right: 0;
    margin-bottom: 2rem
  }
`;
