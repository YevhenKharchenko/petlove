import clsx from 'clsx';
import { sprite } from '../../../assets/icons/index.js';
import s from './PasswordBtn.module.scss';

const PasswordBtn = ({ showPass, onClick, className, ...rest }) => {
  return (
    <button
      type="button"
      className={clsx(s.btn, className && className)}
      onClick={onClick}
      aria-label={showPass ? 'Hide password' : 'Show password'}
      {...rest}
    >
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-${showPass ? 'eye' : 'eye-off'}`}></use>
      </svg>
    </button>
  );
};

export default PasswordBtn;
