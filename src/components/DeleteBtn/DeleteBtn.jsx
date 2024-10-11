import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removePetFromFavorites } from '../../redux/notices/operations.js';
import { getCurrentUser } from '../../redux/auth/operations.js';
import { sprite } from '../../assets/icons/index.js';
import s from './DeleteBtn.module.scss';

const DeleteBtn = ({ id, isNotices }) => {
  const dispatch = useDispatch();

  const handleRemoveBtnClick = async id => {
    await dispatch(removePetFromFavorites(id));
    await dispatch(getCurrentUser());
  };

  return (
    <button
      className={clsx(s.deleteBtn, isNotices && s.noticesDelBtn)}
      onClick={() => handleRemoveBtnClick(id)}
    >
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#icon-trash-2`}></use>
      </svg>
    </button>
  );
};

export default DeleteBtn;
