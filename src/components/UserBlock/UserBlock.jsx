import { sprite } from '../../assets/icons/index.js';
import s from './UserBlock.module.scss';

const UserBlock = () => {
  return (
    <div className={s.userBlock}>
      <div className={s.avatarWrapper}>
        <svg className={s.icon} width="94" height="94">
          <use xlinkHref={`${sprite}#icon-user`}></use>
        </svg>
        <button className={s.btn}>Upload photo</button>
      </div>
      <h2 className={s.title}>My information</h2>
      <div className={s.infoWrapper}>
        <p className={s.infoText}></p>
        <p className={s.infoText}></p>
        <p className={s.infoText}></p>
      </div>
    </div>
  );
};

export default UserBlock;
