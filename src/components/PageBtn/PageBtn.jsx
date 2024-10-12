import clsx from 'clsx';
import { sprite } from '../../assets/icons/index.js';
import s from './PageBtn.module.scss';

const PageBtn = ({ handleClick, disabled, icon, isDouble, className }) => {
  return (
    <button
      className={clsx(s.btn, className && className)}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      <svg className={s.icon} width="7" height="12">
        <use xlinkHref={`${sprite}#icon-${icon}`}></use>
      </svg>
      {isDouble && (
        <svg className={s.icon} width="7" height="12">
          <use xlinkHref={`${sprite}#icon-${icon}`}></use>
        </svg>
      )}
    </button>
  );
};

export default PageBtn;
