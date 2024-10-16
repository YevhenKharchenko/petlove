import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { sprite } from '../../assets/icons/index.js';
import { useSelector } from 'react-redux';
import { selectAvatar, selectUsername } from '../../redux/auth/selectors.js';
import s from './UserBar.module.scss';

const UserBar = ({ isTablet, isHomePage }) => {
  const userName = useSelector(selectUsername);
  const avatar = useSelector(selectAvatar);

  return (
    <Link to="/profile" className={s.link}>
      {avatar?.length ? (
        <img src={avatar} alt="Avatar" width="40" height="40" className={s.avatarImg} />
      ) : (
        <svg className={s.icon} width="40" height="40">
          <use xlinkHref={`${sprite}#icon-user`}></use>
        </svg>
      )}
      {isTablet && <span className={clsx(s.name, isHomePage && s.nameHome)}>{userName}</span>}
    </Link>
  );
};

export default UserBar;
