import NewsItem from '../NewsItem/NewsItem.jsx';
import s from './NewsList.module.scss';

const NewsList = ({ news }) => {
  return (
    <ul className={s.list}>
      {Array.isArray(news) &&
        news.map(item => (
          <li key={item._id}>
            <NewsItem item={item} isNotices={true} />
          </li>
        ))}
    </ul>
  );
};

export default NewsList;
