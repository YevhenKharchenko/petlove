import { formatDate } from '../../utils/formatDate.js';
import s from './NewsItem.module.scss';

const NewsItem = ({ item }) => {
  return (
    <div className={s.newsItem}>
      <img className={s.img} src={item.imgUrl} alt="News image" width="335" height="190" />
      <h3 className={s.title}>{item.title}</h3>
      <p className={s.text}>{item.text}</p>
      <div className={s.linkWrapper}>
        <p className={s.date}>{formatDate(item.date)}</p>
        <a className={s.link} target="_blank" rel="noopener noreferrer" href={item.url}>
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
