import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <Nav />
        <BurgerMenu />
      </Container>
    </header>
  );
};

export default Header;
