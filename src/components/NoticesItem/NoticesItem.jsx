import { sprite } from '../../assets/icons/index.js';
import Button from '../../shared/components/Button/Button.jsx';
import s from './NoticesItem.module.scss';

const NoticesItem = ({ item, isFavorites = true }) => {
  return (
    <div className={s.item}>
      <div className={s.imgWrapper}>
        <img src={item.imgURL} alt="Image of pet" width="287" height="178" className={s.img} />
      </div>
      <div className={s.infoWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>{item.title}</h2>
          <div className={s.ratingWrapper}>
            <svg className={s.icon} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            <span className={s.rating}>4</span>
          </div>
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
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Category</h3>
            <p className={s.itemText}>{item.category}</p>
          </li>
        </ul>
        <p className={s.text}>{item.comment}</p>
        <div className={s.btnWrapper}>
          <Button title="Learn more" className={s.learnBtn} />
          {isFavorites && (
            <button className={s.deleteBtn}>
              <svg className={s.icon} width="44" height="44">
                <use xlinkHref={`${sprite}#icon-delete`}></use>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticesItem;