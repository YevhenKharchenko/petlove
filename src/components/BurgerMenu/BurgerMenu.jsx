import clsx from 'clsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import Nav from '../Nav/Nav.jsx';
import s from './BurgerMenu.module.scss';

const BurgerMenu = ({ handleClick, isHomePage }) => {
  return (
    <section className={clsx(s.backdrop, isHomePage && s.menuHome)}>
      <CloseBtn handleClick={handleClick} isHomePage={isHomePage} />
      <Nav isMenu={true} isHomePage={isHomePage} />
      <AuthNav isMenu={true} isHomePage={isHomePage} />
    </section>
  );
};

export default BurgerMenu;
