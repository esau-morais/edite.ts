import styled from 'styled-components';

export const HeadingOne = styled.h1`
  // Colors
  color: var(--primary-foreground);

  // Font
  font: var(--font-h1);

  @media screen and (max-width: 980px) {
    font: var(--font-h2)
  }
`;

export const HeadingTwo = styled.h2`
  // Colors
  color: var(--primary-foreground);

  // Font
  font: var(--font-h2)
`;

export const HeadingSix = styled.h6`
  // Spacement
  margin-top: var(--margin3x);
  margin-bottom: var(--margin);

  // Font
  font: bold 1.25rem/1.5rem Montserrat;

  // Colors
  color: var(--primary-foreground)
`;

export const Description = styled.p`
  // Spacement
  margin-top: var(--margin);
  margin-bottom: var(--margin2x);

  // Colors
  color: var(--secondary-foreground);

  // Font
  font: var(--font-base)
`;

export const Button = styled.button`
  // Spacement
  padding: 0.875rem 1.125rem;

  // Size
  width: max-content;

  // Font
  font: var(--font-base);

  // Colors
  background-color: var(--primary-blue);
  color: var(--primary-foreground);

  // If the browser doesn't support the filter
  // Replace for a box-shadow
  filter: var(--box-shadow);
  @supports not (filter: var(--box-shadow)) {
    box-shadow: 0 0 1.25rem rgba(24, 160, 251, 0.25)
  };

  border-radius: var(--primary-border-radius)
`;
