import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import s from './NoticesList.module.scss';

const NoticesList = ({ notices }) => {
  return (
    <ul className={s.list}>
      {Array.isArray(notices) &&
        notices.map(item => (
          <li key={item._id}>
            <NoticesItem item={item} isNotices={true} />
          </li>
        ))}
    </ul>
  );
};

export default NoticesList;
