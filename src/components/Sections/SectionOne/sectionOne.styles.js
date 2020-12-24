import styled from 'styled-components';

export const Section = styled.section`
  // Size
  width: 100%;

  // Spacement
  padding: var(--margin4x) var(--margin4x);

  // Row
  div.sectionOne__row {
    display: flex;
    align-items: center;
    justify-content: space-between
  }

  // Column
  div.sectionOne__column {
    max-width: 50%
  }

  div.sectionOne__column > svg {
    // Size
    width: auto;
    height: 100%;

    // Colors
    filter: var(--box-shadow)
  }

  @media screen and (max-width: 1200px) {
    // (Reduce) Spacement
    padding: var(--margin2x) var(--margin);

    // Row
    div.sectionOne__row {
      flex-direction: column;
      text-align: center
    }

    // Column
    div.sectionOne__column {
      max-width: 100%;

      // Spacement
      &:nth-child(1) {
        margin-bottom: var(--margin2x)
      }
      // Size
      &:nth-child(2) > svg {
        width: 100%
      }
    }
  }
`;
