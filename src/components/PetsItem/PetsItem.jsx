import { sprite } from '../../assets/icons/index.js';
import s from './PetsItem.module.scss';

const PetsItem = () => {
  return (
    <div className={s.petsItem}>
      <div className={s.imgWrapper}>
        <img src="" alt="" width="66" height="66" />
      </div>
      <div className={s.infoWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>Persian Cat for Sale</h2>
          <button className={s.deleteBtn}>
            <svg className={s.icon} width="30" height="30">
              <use xlinkHref={`${sprite}#icon-delete`}></use>
            </svg>
          </button>
        </div>
        <ul className={s.characteristicsList}>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Name</h3>
            <p className={s.itemText}>Fluffy</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Birthday</h3>
            <p className={s.itemText}>20.06.2019</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Sex</h3>
            <p className={s.itemText}>Female</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Species</h3>
            <p className={s.itemText}>Cat</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PetsItem;
