import clsx from 'clsx';
import { sprite } from '../../../assets/icons/index.js';
import s from './CheckIcon.module.scss';

const CheckIcon = ({ isChecked, className, ...rest }) => {
  return (
    <svg
      className={clsx(s.icon, !isChecked && s.cross, className && className)}
      width="18"
      height="18"
      {...rest}
    >
      <use xlinkHref={`${sprite}#icon-${isChecked ? 'check' : 'cross-small'}`}></use>
    </svg>
  );
};

export default CheckIcon;
