import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/users/operations.js';
import { catImg, catImg2x } from '../../assets/images/index.js';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import s from './ModalApproveAction.module.scss';

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
      <img
        src={catImg}
        srcSet={`${catImg2x} 2x`}
        alt="Cat"
        width="80"
        height="80"
        className={s.img}
      />
      <p className={s.text}>Already leaving?</p>
      <div className={s.btnWrapper}>
        <Button title="Yes" className={s.approveBtn} onClick={handleApproveBtnClick} />
        <Button title="Cancel" className={s.cancelBtn} onClick={closeModal} />
      </div>
    </section>
  );
};

export default ModalApproveAction;
