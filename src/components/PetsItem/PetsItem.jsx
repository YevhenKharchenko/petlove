import { useDispatch } from 'react-redux';
import { removePet } from '../../redux/users/operations.js';
import { sprite } from '../../assets/icons/index.js';
import s from './PetsItem.module.scss';

const PetsItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteBtnClick = async item => {
    await dispatch(removePet(item._id));
  };

  return (
    <div className={s.petsItem}>
      <div className={s.imgWrapper}>
        <img className={s.img} src={item.imgURL} alt="Pet image" width="66" height="66" />
      </div>
      <div className={s.infoWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>{item.title}</h2>
          <button className={s.deleteBtn} onClick={() => handleDeleteBtnClick(item)}>
            <svg className={s.icon} width="30" height="30">
              <use xlinkHref={`${sprite}#icon-delete`}></use>
            </svg>
          </button>
        </div>
        <ul className={s.characteristicsList}>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Name</h3>
            <p className={s.itemText}>{item.name}</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Birthday</h3>
            <p className={s.itemText}>{item.birthday}</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Sex</h3>
            <p className={s.itemText}>{item.sex}</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Species</h3>
            <p className={s.itemText}>{item.species}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PetsItem;
