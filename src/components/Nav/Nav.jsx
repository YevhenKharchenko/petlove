import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss';

const Nav = ({ className, isHomePage, isMenu }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(
      s.link,
      isActive && s.active,
      isHomePage && !isMenu && s.linkHome,
      isMenu && !isHomePage && s.linkHome,
      isMenu && s.linkMenu
    );
  };

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
