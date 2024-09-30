import clsx from 'clsx';
import { Link } from 'react-router-dom';
import s from './AuthNav.module.scss';

const AuthNav = ({ isHomePage, isMenu }) => {
  return (
    <nav className={clsx(s.nav, isMenu && s.navMenu)}>
      <Link
        to="/login"
        className={clsx(
          s.link,
          s.login,
          isHomePage && s.loginHome,
          isMenu && !isHomePage && s.loginHome
        )}
      >
        Log In
      </Link>
      <Link to="/register" className={clsx(s.link, s.register)}>
        Registration
      </Link>
    </nav>
  );
};

export default AuthNav;
