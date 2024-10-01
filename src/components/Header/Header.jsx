import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import MenuBtn from '../MenuBtn/MenuBtn.jsx';
import s from './Header.module.scss';
import { BREAKPOINT } from '../../constants/index.js';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({
    query: `(min-width:${BREAKPOINT.DESKTOP}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width:${BREAKPOINT.TABLET}px)`,
  });

  const handleMenuBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={s.header}>
      <div className={clsx(s.headerWrapper, isHomePage && s.home)}>
        <Container className={s.headerContainer}>
          <Logo isHomePage={isHomePage} />
          {isDesktop && <Nav className={s.nav} isHomePage={isHomePage} />}
          {isTablet && <AuthNav isHomePage={isHomePage} />}
          <MenuBtn isHomePage={isHomePage} handleClick={handleMenuBtnClick} />
          {isOpen && <BurgerMenu handleClick={handleMenuBtnClick} isHomePage={isHomePage} />}
        </Container>
      </div>
    </header>
  );
};

export default Header;
