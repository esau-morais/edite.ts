import styled from 'styled-components';

export const Faq = styled.details`
  width: 100%;
  padding: var(--margin2x);

  font: bold 1.25rem/1.5rem Montserrat;

  border: 1px solid var(--secondary-blue);
  border-radius: var(--primary-border-radius);
  color: var(--primary-foreground);

  summary::-webkit-details-marker {
    color: var(--secondary-blue)
  }
`;