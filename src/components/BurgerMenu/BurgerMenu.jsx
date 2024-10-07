import clsx from 'clsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import Nav from '../Nav/Nav.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import s from './BurgerMenu.module.scss';

const BurgerMenu = ({ handleClick, isHomePage, isLoggedIn }) => {
  return (
    <section className={clsx(s.backdrop, isHomePage && s.menuHome)}>
      <CloseBtn handleClick={handleClick} isHomePage={isHomePage} />
      <Nav isMenu={true} isHomePage={isHomePage} />
      {isLoggedIn ? <LogOutBtn isMenu={true} /> : <AuthNav isMenu={true} isHomePage={isHomePage} />}
    </section>
  );
};

export default BurgerMenu;
