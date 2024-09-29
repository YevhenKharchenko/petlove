import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Nav = ({ className }) => {
  return (
    <nav className={clsx(s.nav, className && className)}>
      <NavLink to="/news" className={buildLinkClass}>
        News
      </NavLink>
      <NavLink to="/notices" className={buildLinkClass}>
        Find pet
      </NavLink>
      <NavLink to="/friends" className={buildLinkClass}>
        Our friends
      </NavLink>
    </nav>
  );
};

export default Nav;
