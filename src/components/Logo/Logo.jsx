import { NavLink } from 'react-router-dom';
import { logo } from '../../assets/images/index.js';
import './Logo.module.scss';

const Logo = () => {
  return (
    <div>
      <NavLink to="/home">
        <img src={logo} alt="Logo" />
      </NavLink>
    </div>
  );
};

export default Logo;
