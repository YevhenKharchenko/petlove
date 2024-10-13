import clsx from 'clsx';
import { sprite } from '../../assets/icons/index.js';
import s from './CloseBtn.module.scss';

const CloseBtn = ({ handleClick, isHomePage, isMenu }) => {
  return (
    <button
      type="button"
      className={clsx(s.closeBtn, isMenu && s.menuBtn)}
      onClick={handleClick}
      aria-label="Close modal"
    >
      <svg className={clsx(s.closeIcon, isHomePage && s.closeIconHome)} width="32" height="32">
        <use xlinkHref={`${sprite}#icon-x`}></use>
      </svg>
    </button>
  );
};

export default CloseBtn;
