import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUserFull } from '../../redux/auth/operations.js';
import UserCard from '../../components/UserCard/UserCard.jsx';
import MyNotices from '../../components/MyNotices/MyNotices.jsx';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import s from './ProfilePage.module.scss';

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserFull());
  }, [dispatch]);

  return (
    <main className={s.profileContainer}>
      <DocumentTitle>Profile</DocumentTitle>
      <UserCard />
      <MyNotices />
    </main>
  );
};

export default ProfilePage;
