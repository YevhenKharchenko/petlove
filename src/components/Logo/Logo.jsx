import { NavLink } from 'react-router-dom';
import { logo, logoHome } from '../../assets/images/index.js';
import './Logo.module.scss';

const Logo = ({ isHomePage }) => {
  return (
    <div>
      <NavLink to="/home">
        <img src={isHomePage ? logoHome : logo} alt="Logo" width="76" height="20" />
      </NavLink>
    </div>
  );
};

export default Logo;
