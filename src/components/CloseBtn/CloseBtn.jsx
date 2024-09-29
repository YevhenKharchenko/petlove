import { sprite } from '../../assets/icons/index.js';
import s from './CloseBtn.module.scss';

const CloseBtn = ({ handleClick }) => {
  return (
    <button className={s.closeBtn} onClick={handleClick}>
      <svg className={s.closeIcon} width="32" height="32">
        <use xlinkHref={`${sprite}#icon-x`}></use>
      </svg>
    </button>
  );
};

export default CloseBtn;
