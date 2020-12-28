// Icons
import { ReactComponent as Logo } from 'assets/Logo.svg';
// Components (child)
import Burger from './burger';
// Components (styles)
import { Container } from './topBar.styles';

function TopBar() {
  return (
    <Container>
      {/* Left → Logo */}
      <div className="topBar__left">
        <Logo />
      </div>
      <Burger />
    </Container>
  )
}

export default TopBar;
