import { sprite } from '../../../assets/icons/index.js';
import s from './CheckIcon.module.scss';

const CheckIcon = ({ isChecked }) => {
  return (
    <svg className={s.icon} width="18" height="18">
      <use xlinkHref={`${sprite}#icon-${isChecked ? 'check' : 'cross-small'}`}></use>
    </svg>
  );
};

export default CheckIcon;
