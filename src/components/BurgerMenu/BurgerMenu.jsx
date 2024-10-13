import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import AuthNav from '../AuthNav/AuthNav.jsx';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import Nav from '../Nav/Nav.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import s from './BurgerMenu.module.scss';

const BurgerMenu = ({ handleClick, isHomePage, isLoggedIn }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClick]);

  return (
    <section className={clsx(s.backdrop, isHomePage && s.menuHome)} ref={menuRef}>
      <CloseBtn handleClick={handleClick} isHomePage={isHomePage} isMenu={true} />
      <Nav isMenu={true} isHomePage={isHomePage} handleClick={handleClick} />
      {isLoggedIn ? (
        <LogOutBtn isMenu={true} />
      ) : (
        <AuthNav isMenu={true} isHomePage={isHomePage} handleClick={handleClick} />
      )}
    </section>
  );
};

export default BurgerMenu;
