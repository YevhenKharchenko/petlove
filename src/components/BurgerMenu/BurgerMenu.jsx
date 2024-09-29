import AuthNav from '../AuthNav/AuthNav.jsx';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import Nav from '../Nav/Nav.jsx';
import s from './BurgerMenu.module.scss';

const BurgerMenu = ({ handleClick }) => {
  return (
    <section className={s.backdrop}>
      <CloseBtn handleClick={handleClick} />
      <Nav />
      <AuthNav />
    </section>
  );
};

export default BurgerMenu;
