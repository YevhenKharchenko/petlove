import { sprite } from '../../../assets/icons/index.js';
import s from './PasswordBtn.module.scss';

const PasswordBtn = ({ showPass, onClick }) => {
  return (
    <button
      type="button"
      className={s.btn}
      onClick={onClick}
      aria-label={showPass ? 'Hide password' : 'Show password'}
    >
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-${showPass ? 'eye' : 'eye-off'}`}></use>
      </svg>
    </button>
  );
};

export default PasswordBtn;
