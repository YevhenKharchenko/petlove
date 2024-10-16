import { Link } from 'react-router-dom';
import { catImg, catImg2x } from '../../assets/images/index.js';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import s from './ModalCongrats.module.scss';

const ModalCongrats = ({ closeModal }) => {
  return (
    <section className={s.container}>
      <CloseBtn handleClick={closeModal} isHomePage={true} />
      <img
        src={catImg}
        srcSet={`${catImg2x} 2x`}
        alt="Cat"
        width="80"
        height="80"
        className={s.img}
      />
      <h2 className={s.title}>Congrats</h2>
      <p className={s.text}>
        The first fluff in the favorites! May your friendship be the happiest and filled with fun.
      </p>
      <Link className={s.link} to="/profile" onClick={() => closeModal()}>
        Go to profile
      </Link>
    </section>
  );
};

export default ModalCongrats;
