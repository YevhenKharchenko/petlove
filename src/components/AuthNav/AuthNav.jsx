import { Link } from 'react-router-dom';
import s from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <Link to="/login" className={(s.link, s.login)}>
        Log In
      </Link>
      <Link to="/register" className={(s.link, s.register)}>
        Registration
      </Link>
    </nav>
  );
};

export default AuthNav;
