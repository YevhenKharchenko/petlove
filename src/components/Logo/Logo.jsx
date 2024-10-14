import { NavLink } from 'react-router-dom';
import { sprite } from '../../assets/icons/index.js';
import s from './Logo.module.scss';

const Logo = ({ isHomePage }) => {
  return (
    <div>
      <NavLink to="/home" className={s.logoWrapper} aria-label="Go to the Home page">
        <svg className={s.logo} width="76" height="20">
          <use xlinkHref={`${sprite}#icon-${isHomePage ? 'logo-white' : 'logo'}`}></use>
        </svg>
      </NavLink>
    </div>
  );
};

export default Logo;
