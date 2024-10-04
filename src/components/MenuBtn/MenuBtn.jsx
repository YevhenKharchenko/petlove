import clsx from 'clsx';
import { sprite } from '../../assets/icons/index.js';
import s from './MenuBtn.module.scss';

const MenuBtn = ({ handleClick, isHomePage, isLoggedIn }) => {
  return (
    <button
      type="button"
      className={clsx(s.menuBtn, isLoggedIn && s.isLoggedIn)}
      onClick={handleClick}
    >
      <svg className={isHomePage ? s.menuIconHome : s.menuIcon} width="32" height="32">
        <use xlinkHref={`${sprite}#icon-menu`}></use>
      </svg>
    </button>
  );
};

export default MenuBtn;
