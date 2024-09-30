import clsx from 'clsx';
import { sprite } from '../../assets/icons/index.js';
import s from './CloseBtn.module.scss';

const CloseBtn = ({ handleClick, isHomePage }) => {
  return (
    <button className={s.closeBtn} onClick={handleClick}>
      <svg className={clsx(s.closeIcon, isHomePage && s.closeIconHome)} width="32" height="32">
        <use xlinkHref={`${sprite}#icon-x`}></use>
      </svg>
    </button>
  );
};

export default CloseBtn;
