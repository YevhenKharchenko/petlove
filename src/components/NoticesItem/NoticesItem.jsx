import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsFavorite } from '../../redux/auth/selectors.js';
import { capitalizeFirstLetter, convertPopularityRating } from '../../utils/index.js';
import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn.jsx';
import Star from '../../shared/components/Star/Star.jsx';
import LikeBtn from '../LikeBtn/LikeBtn.jsx';
import DeleteBtn from '../DeleteBtn/DeleteBtn.jsx';
import s from './NoticesItem.module.scss';

const NoticesItem = ({ item, isNotices }) => {
  const isFavoriteSelector = selectIsFavorite(item._id);
  const isFavorite = useSelector(isFavoriteSelector);

  return (
    <div className={clsx(s.item, isNotices && s.noticesItem)}>
      <div className={s.imgWrapper}>
        <img
          src={item.imgURL}
          alt="Image of pet"
          width="287"
          height="178"
          className={clsx(s.img, isNotices && s.noticesImg)}
        />
      </div>
      <div className={s.infoWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>{item.title}</h2>
          <div className={s.ratingWrapper}>
            <Star />
            <span className={s.rating}>{convertPopularityRating(item.popularity)}</span>
          </div>
        </div>
        <ul className={s.characteristicsList}>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Name</h3>
            <p className={s.itemText}>{capitalizeFirstLetter(item.name)}</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Birthday</h3>
            <p className={s.itemText}>{item.birthday}</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Sex</h3>
            <p className={s.itemText}>{capitalizeFirstLetter(item.sex)}</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Species</h3>
            <p className={s.itemText}>{capitalizeFirstLetter(item.species)}</p>
          </li>
          <li className={s.listItem}>
            <h3 className={s.itemTitle}>Category</h3>
            <p className={s.itemText}>{capitalizeFirstLetter(item.category)}</p>
          </li>
        </ul>
        <p className={clsx(s.text, isNotices && s.noticesText)}>{item.comment}</p>
        <div className={s.btnWrapper}>
          <LearnMoreBtn id={item._id} isNotices={isNotices} />
          {isFavorite ? (
            <DeleteBtn id={item._id} />
          ) : (
            <LikeBtn id={item._id} isNotices={isNotices} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticesItem;
