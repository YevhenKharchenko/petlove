import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getNotices } from '../../redux/notices/operations.js';
import { selectNotices } from '../../redux/notices/selectors.js';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import s from './NoticesList.module.scss';

const NoticesList = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);

  useEffect(() => {
    dispatch(getNotices());
  }, [dispatch]);

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
