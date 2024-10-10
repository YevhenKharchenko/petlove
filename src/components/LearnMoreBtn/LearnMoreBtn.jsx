import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useModal } from '../../hooks/index.js';
import { getPetById } from '../../redux/notices/operations.js';
import Button from '../../shared/components/Button/Button.jsx';
import ModalNotice from '../ModalNotice/ModalNotice.jsx';
import s from './LearnMoreBtn.module.scss';

const LearnMoreBtn = ({ id }) => {
  const dispatch = useDispatch();
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModalNotice = useCallback(async () => {
    await dispatch(getPetById(id));
    setModal(<ModalNotice closeModal={closeModal} />);
  }, [setModal, closeModal, dispatch, id]);

  return <Button title="Learn more" className={s.learnBtn} onClick={openModalNotice} />;
};

export default LearnMoreBtn;
