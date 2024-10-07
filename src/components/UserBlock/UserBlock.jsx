import { useSelector } from 'react-redux';
import {
  selectAvatar,
  selectEmail,
  selectPhone,
  selectUsername,
} from '../../redux/users/selectors.js';
import { sprite } from '../../assets/icons/index.js';
import s from './UserBlock.module.scss';

const UserBlock = () => {
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);
  const avatar = useSelector(selectAvatar);

  return (
    <div className={s.userBlock}>
      <div className={s.avatarWrapper}>
        {avatar?.length ? (
          <img src={avatar} alt="Avatar" width="94" height="94" className={s.avatarImg} />
        ) : (
          <svg className={s.icon} width="94" height="94">
            <use xlinkHref={`${sprite}#icon-user`}></use>
          </svg>
        )}
        <button className={s.btn}>Upload photo</button>
      </div>
      <h2 className={s.title}>My information</h2>
      <div className={s.infoWrapper}>
        <p className={s.infoText}>{username}</p>
        <p className={s.infoText}>{email}</p>
        <p className={s.infoText}>{phone || '+380'}</p>
      </div>
    </div>
  );
};

export default UserBlock;
