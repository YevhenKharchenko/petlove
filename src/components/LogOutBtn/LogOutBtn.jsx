import clsx from 'clsx';
import { useCallback } from 'react';
import { useModal } from '../../hooks/index.js';
import Button from '../../shared/components/Button/Button.jsx';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction.jsx';
import s from './LogOutBtn.module.scss';

const LogOutBtn = ({ isHomePage, className, isMenu }) => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openLogoutModal = useCallback(() => {
    setModal(<ModalApproveAction closeModal={closeModal} />);
  }, [setModal, closeModal]);

  return (
    <Button
      title="Log out"
      className={clsx(
        s.logoutBtn,
        className && className,
        isHomePage && s.logoutBtnHome,
        isMenu && s.logoutBtnMenu
      )}
      onClick={openLogoutModal}
    />
  );
};

export default LogOutBtn;
