import { useDispatch } from 'react-redux';
import s from './NoticesList.module.scss';
import { useEffect } from 'react';
import { getNotices } from '../../redux/notices/operations.js';

const NoticesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotices());
  }, [dispatch]);

  return <div></div>;
};

export default NoticesList;
