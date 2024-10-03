import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import UserBar from '../UserBar/UserBar.jsx';
import s from './UserNav.module.scss';

const UserNav = ({ isTablet, isHomePage }) => {
  return (
    <nav className={s.nav}>
      {isTablet && <LogOutBtn isHomePage={isHomePage} />}
      <UserBar isTablet={isTablet} isHomePage={isHomePage} />
    </nav>
  );
};

export default UserNav;
