import { useDispatch } from 'react-redux';
import { addPetToFavorites } from '../../redux/notices/operations.js';
import { getCurrentUser } from '../../redux/auth/operations.js';
import { sprite } from '../../assets/icons/index.js';
import s from './LikeBtn.module.scss';
import clsx from 'clsx';

const LikeBtn = ({ id, isNotices }) => {
  const dispatch = useDispatch();

  const handleAddBtnClick = async id => {
    await dispatch(addPetToFavorites(id));
    await dispatch(getCurrentUser());
  };

  return (
    <button
      className={clsx(s.likeBtn, isNotices && s.noticesLikeBtn)}
      onClick={() => handleAddBtnClick(id)}
    >
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-heart`}></use>
      </svg>
    </button>
  );
};

export default LikeBtn;
