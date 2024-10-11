import { Link } from 'react-router-dom';
import { dogImg, dogImg2x } from '../../assets/images/index.js';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import s from './ModalAttention.module.scss';

const ModalAttention = ({ closeModal }) => {
  return (
    <section className={s.container}>
      <CloseBtn className={s.closeBtn} isHomePage={true} handleClick={closeModal} />
      <img
        src={dogImg}
        srcSet={`${dogImg2x} 2x`}
        alt="Dog"
        width="80"
        height="80"
        className={s.img}
      />
      <h2 className={s.title}>Attention</h2>
      <p className={s.text}>
        We would like to remind you that certain functionality is available only to authorized
        users.If you have an account, please log in with your credentials. If you do not already
        have an account, you must register to access these features.
      </p>
      <div className={s.btnWrapper}>
        <Link className={s.loginBtn} to="/login" onClick={() => closeModal()}>
          Log In
        </Link>
        <Link className={s.registerBtn} to="/register" onClick={() => closeModal()}>
          Registration
        </Link>
      </div>
    </section>
  );
};

export default ModalAttention;
