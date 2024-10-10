import clsx from 'clsx';
import { sprite } from '../../../assets/icons/index.js';
import s from './Star.module.scss';

const Star = ({ isGrey }) => {
  return (
    <div className={s.iconWrapper}>
      <svg className={clsx(s.star, isGrey && s.grey)} width="16" height="16">
        <use xlinkHref={`${sprite}#icon-star`}></use>
      </svg>
    </div>
  );
};

export default Star;
