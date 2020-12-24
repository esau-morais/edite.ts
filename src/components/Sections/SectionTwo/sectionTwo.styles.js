import styled from 'styled-components';

export const Section = styled.section`
  // Spacement
  margin: var(--margin6x) 0;
  padding: 0 var(--margin4x);

  // Size
  width: 100%;

  // Display
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 980px) {
    // (Reduce) Spacement
    padding: 0 var(--margin);

    text-align: center;
  }
`;

export const Box = styled.div`
  // Spacement
  margin: var(--margin4x) 0;

  // Cards layout grid
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  // Card
  div.card__container {
    // Spacement
    padding: var(--margin3x) var(--margin2x);

    // Size
    max-width: 17.6rem;

    // Colors
    background-color: var(--secondary-background);
    transition: box-shadow .2s ease;

    border-radius: var(--primary-border-radius);

    &:hover {
      box-shadow: 0 0 1rem #18A0FB;
    }
  }
`;
