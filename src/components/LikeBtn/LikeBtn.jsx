import { useDispatch } from 'react-redux';
import { addPetToFavorites } from '../../redux/notices/operations.js';
import { getCurrentUser } from '../../redux/auth/operations.js';
import { sprite } from '../../assets/icons/index.js';
import s from './LikeBtn.module.scss';

const LikeBtn = ({ id }) => {
  const dispatch = useDispatch();

  const handleAddBtnClick = async id => {
    await dispatch(addPetToFavorites(id));
    await dispatch(getCurrentUser());
  };

  return (
    <button className={s.likeBtn} onClick={() => handleAddBtnClick(id)}>
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-heart`}></use>
      </svg>
    </button>
  );
};

export default LikeBtn;
