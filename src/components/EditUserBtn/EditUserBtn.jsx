import { sprite } from '../../assets/icons/index.js';
import s from './EditUserBtn.module.scss';

const EditUserBtn = () => {
  return (
    <button type="button" className={s.btn}>
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-edit`}></use>
      </svg>
    </button>
  );
};

export default EditUserBtn;
