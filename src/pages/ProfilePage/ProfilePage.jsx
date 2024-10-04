import UserCard from '../../components/UserCard/UserCard.jsx';
import s from './ProfilePage.module.scss';

const ProfilePage = () => {
  return (
    <main className={s.profileContainer}>
      <UserCard />
    </main>
  );
};

export default ProfilePage;
