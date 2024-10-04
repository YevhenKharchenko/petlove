import { Link } from 'react-router-dom';
import { sprite } from '../../assets/icons/index.js';
import s from './AddPet.module.scss';

const AddPet = () => {
  return (
    <Link to="/add-pet" className={s.link}>
      <span>Add pet</span>
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-plus`}></use>
      </svg>
    </Link>
  );
};

export default AddPet;
