import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import s from './Header.module.scss';
import { useState } from 'react';
import AuthNav from '../AuthNav/AuthNav.jsx';
import MenuBtn from '../MenuBtn/MenuBtn.jsx';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={s.header}>
      <div className={clsx(s.headerWrapper, isHomePage && s.home)}>
        <Container>
          <Logo isHomePage={isHomePage} />
          <Nav className={s.nav} />
          <AuthNav />
          <MenuBtn handleClick={handleMenuBtnClick} />
          {isOpen && <BurgerMenu handleClick={handleMenuBtnClick} />}
        </Container>
      </div>
    </header>
  );
};

export default Header;
