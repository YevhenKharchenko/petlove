import { useDispatch } from 'react-redux';
import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn.jsx';
import { sprite } from '../../assets/icons/index.js';
import s from './NoticesItem.module.scss';
import { removePetFromFavorites } from '../../redux/notices/operations.js';
import { getCurrentUserFull } from '../../redux/auth/operations.js';

const NoticesItem = ({ item, isFavorites = true }) => {
  const dispatch = useDispatch();
  const handleRemoveBtnClick = async id => {
    await dispatch(removePetFromFavorites(id));
    await dispatch(getCurrentUserFull());
  };

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
            <span className={s.rating}>{Number(item.popularity / 1000).toFixed(0)}</span>
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
          <LearnMoreBtn id={item._id} />
          {isFavorites && (
            <button className={s.deleteBtn} onClick={() => handleRemoveBtnClick(item._id)}>
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
