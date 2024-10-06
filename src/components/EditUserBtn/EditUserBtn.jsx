import { useCallback } from 'react';
import { useModal } from '../../hooks/index.js';
import { sprite } from '../../assets/icons/index.js';
import ModalEditUser from '../ModalEditUser/ModalEditUser.jsx';
import s from './EditUserBtn.module.scss';

const EditUserBtn = () => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModalEditUser = useCallback(() => {
    setModal(<ModalEditUser closeModal={closeModal} />);
  }, [setModal, closeModal]);

  return (
    <button type="button" className={s.btn} onClick={openModalEditUser}>
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-edit`}></use>
      </svg>
    </button>
  );
};

export default EditUserBtn;
