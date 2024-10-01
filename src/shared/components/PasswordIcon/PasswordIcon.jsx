import { sprite } from '../../../assets/icons/index.js';
import s from './PasswordIcon.module.scss';

const PasswordIcon = ({ showPass }) => {
  return (
    <button
      type="button"
      className={s.btn}
      onClick={onclick}
      aria-label={showPass ? 'Hide password' : 'Show password'}
    >
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-${showPass ? 'eye' : 'eye-off'}`}></use>
      </svg>
    </button>
  );
};

export default PasswordIcon;
