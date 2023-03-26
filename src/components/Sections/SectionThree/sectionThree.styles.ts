import styled from 'styled-components'

export const Faq = styled.details`
  width: 100%;
  margin: var(--margin);
  padding: var(--margin2x);

  font: bold 1.25rem/1.5rem Montserrat;

  border: 1px solid var(--secondary-blue);
  border-radius: var(--primary-border-radius);
  color: var(--primary-foreground);

  /* If it's open, apply a "sweep" animation to the content */
  &[open] summary ~ * {
    animation: faq-sweep .5s ease-in-out;
  }

  summary {
    width: fit-content
  }
  summary::-webkit-details-marker {
    color: var(--secondary-blue)
  }
`