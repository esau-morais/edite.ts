import styled from 'styled-components';

export const Section = styled.section`
  // Size
  width: 100%;

  // Spacement
  padding: 0 var(--margin4x);

  // Display/Alignment → Center
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 980px) {
    // (Reduce) Spacement
    padding: 0 var(--margin);

    text-align: center
  }
`;
