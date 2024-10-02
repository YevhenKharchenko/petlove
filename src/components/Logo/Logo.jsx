import { NavLink } from 'react-router-dom';
import { logo, logoHome } from '../../assets/images/index.js';
import s from './Logo.module.scss';

const Logo = ({ isHomePage }) => {
  return (
    <div>
      <NavLink to="/home">
        <img
          src={isHomePage ? logoHome : logo}
          className={s.logo}
          alt="Logo"
          width="76"
          height="20"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
