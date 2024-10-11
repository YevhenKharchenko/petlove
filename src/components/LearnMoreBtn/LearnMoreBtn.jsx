import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useModal } from '../../hooks/index.js';
import { getPetById } from '../../redux/notices/operations.js';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import Button from '../../shared/components/Button/Button.jsx';
import ModalNotice from '../ModalNotice/ModalNotice.jsx';
import ModalAttention from '../ModalAttention/ModalAttention.jsx';
import s from './LearnMoreBtn.module.scss';

const LearnMoreBtn = ({ id, isNotices }) => {
  const dispatch = useDispatch();
  const setModal = useModal();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModalNotice = useCallback(async () => {
    if (isLoggedIn) {
      await dispatch(getPetById(id));
      setModal(<ModalNotice closeModal={closeModal} />);
    } else {
      setModal(<ModalAttention closeModal={closeModal} />);
    }
  }, [setModal, closeModal, dispatch, id, isLoggedIn]);

  return (
    <Button
      title="Learn more"
      className={clsx(s.learnBtn, isNotices && s.noticesLearnBtn)}
      onClick={openModalNotice}
    />
  );
};

export default LearnMoreBtn;
