import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { BREAKPOINT } from '../../constants/index.js';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import MenuBtn from '../MenuBtn/MenuBtn.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import s from './Header.module.scss';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
          {isTablet && !isLoggedIn && <AuthNav isHomePage={isHomePage} />}
          {isLoggedIn && <UserNav isTablet={isTablet} isHomePage={isHomePage} />}
          <MenuBtn
            isHomePage={isHomePage}
            handleClick={handleMenuBtnClick}
            isLoggedIn={isLoggedIn}
          />
          {isOpen && (
            <BurgerMenu
              handleClick={handleMenuBtnClick}
              isHomePage={isHomePage}
              isLoggedIn={isLoggedIn}
            />
          )}
        </Container>
      </div>
    </header>
  );
};

export default Header;
