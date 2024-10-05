import { sprite } from '../../assets/icons/index.js';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/users/operations.js';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import s from './ModalApproveAction.module.scss';
import { useNavigate } from 'react-router-dom';

const ModalApproveAction = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleApproveBtnClick = async () => {
    await dispatch(logoutUser());
    closeModal();
    navigate('/home');
  };

  return (
    <section className={s.container}>
      <CloseBtn className={s.closeBtn} isHomePage={true} handleClick={closeModal} />
      <div className={s.imgWrapper}>
        <svg className={s.icon} width="80" height="80">
          <use xlinkHref={`${sprite}#icon-image-cat`}></use>
        </svg>
      </div>
      <p className={s.text}>Already leaving?</p>
      <div className={s.btnWrapper}>
        <Button title="Yes" className={s.approveBtn} onClick={handleApproveBtnClick} />
        <Button title="Cancel" className={s.cancelBtn} onClick={closeModal} />
      </div>
    </section>
  );
};

export default ModalApproveAction;
