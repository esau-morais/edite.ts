import { useState, useEffect } from 'react';
// Components (child)
import Menu from './items';
// Components (styles)
import styled from 'styled-components';

const Toggler = styled.div`
  // Size
  width: 2rem;
  height: 2rem;

  // Position → Upper-right
  position: relative;
  z-index: 1000;

  // Default display: Hidden
  display: none;

  cursor: pointer;

  @media (max-width: 980px) {
    // Display: Visible
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  span {
    // Size
    width: 2rem;
    height: 0.25rem;

    // Colors
    background-color: ${({ open }) => (
      open ? "var(--primary-foreground)"
           : "var(--secondary-foreground)"
    )};

    border-radius: var(--primary-border-radius);
    transform-origin: 1px;
    transition: all .3s linear;

    // Toggler lines disposition before/after opened
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
     if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      <Toggler
        open={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </Toggler>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default Burger;
