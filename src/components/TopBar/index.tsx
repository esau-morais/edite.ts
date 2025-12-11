// Icons
import Logo from "@/assets/Logo.svg?react";

// Components (child)
import Burger from "./burger";
// Components (styles)
import { Container } from "./topBar.styles";

const TopBar = () => {
  return (
    <Container>
      {/* Left → Logo */}
      <div className="topBar__left">
        <Logo />
      </div>
      <Burger />
    </Container>
  );
};

export default TopBar;
