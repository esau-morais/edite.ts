import styled from 'styled-components';

export const Container = styled.footer`
  // Spacement
  margin-top: 4.5rem;
  padding: 3.5rem var(--margin4x);

  // Size
  width: 100%;

  // Display
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;

  // Logo → Left
  div.footer__left {
    flex: 1 1 auto
  }

  // Copyright → Middle
  div.footer__middle {
    flex: 1 1 auto;
    text-align: center
  }

  // Social media → Right
  div.footer__right {
    flex: 1 1 auto
  }
  ul {
    // Display
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 auto
  }
  li {
    margin-right: var(--margin2x);

    &:nth-child(3) {
      margin-right: 0
    }
  }

  @media screen and (max-width: 980px) {
    // (Reduce) Spacement
    padding: var(--margin2x) var(--margin2x);

    // Transform into a column disposition
    flex-direction: column;
    justify-content: center;

    // Spacement to the middle
    div.footer__middle {
      margin: var(--margin) 0
    }
  }
`;
