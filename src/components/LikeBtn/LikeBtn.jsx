import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useModal } from '../../hooks/useModal.js';
import { addPetToFavorites } from '../../redux/notices/operations.js';
import { getCurrentUser } from '../../redux/auth/operations.js';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { sprite } from '../../assets/icons/index.js';
import ModalAttention from '../ModalAttention/ModalAttention.jsx';
import s from './LikeBtn.module.scss';

const LikeBtn = ({ id, isNotices }) => {
  const dispatch = useDispatch();
  const setModal = useModal();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const handleAddBtnClick = async id => {
    if (isLoggedIn) {
      await dispatch(addPetToFavorites(id));
      await dispatch(getCurrentUser());
    } else {
      setModal(<ModalAttention closeModal={closeModal} />);
    }
  };

  return (
    <button
      className={clsx(s.likeBtn, isNotices && s.noticesLikeBtn)}
      onClick={() => handleAddBtnClick(id)}
      aria-label="Add to favorites"
    >
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-heart`}></use>
      </svg>
    </button>
  );
};

export default LikeBtn;
