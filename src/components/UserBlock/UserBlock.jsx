import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useModal } from '../../hooks/index.js';
import {
  selectAvatar,
  selectEmail,
  selectPhone,
  selectUsername,
} from '../../redux/auth/selectors.js';
import { sprite } from '../../assets/icons/index.js';
import ModalEditUser from '../ModalEditUser/ModalEditUser.jsx';
import s from './UserBlock.module.scss';

const UserBlock = () => {
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);
  const avatar = useSelector(selectAvatar);

  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModalEditUser = useCallback(() => {
    setModal(<ModalEditUser closeModal={closeModal} />);
  }, [setModal, closeModal]);

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
        <button className={s.btn} onClick={openModalEditUser}>
          Upload photo
        </button>
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
