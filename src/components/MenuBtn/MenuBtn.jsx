import { sprite } from '../../assets/icons/index.js';
import s from './MenuBtn.module.scss';

const MenuBtn = ({ handleClick, isHomePage }) => {
  return (
    <button className={s.menuBtn} onClick={handleClick}>
      <svg className={isHomePage ? s.menuIconHome : s.menuIcon} width="32" height="32">
        <use xlinkHref={`${sprite}#icon-menu`}></use>
      </svg>
    </button>
  );
};

export default MenuBtn;
