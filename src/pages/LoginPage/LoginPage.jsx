import PetBlock from '../../shared/components/PetBlock/PetBlock.jsx';
import {
  loginImg,
  loginImg2x,
  loginImgTab,
  loginImgTab2x,
  loginImgDesk,
  loginImgDesk2x,
} from '../../assets/images/index.js';
import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={s.section}>
      <PetBlock
        mob={loginImg}
        mob2x={loginImg2x}
        tab={loginImgTab}
        tab2x={loginImgTab2x}
        desk={loginImgDesk}
        desk2x={loginImgDesk2x}
        alt="Dog"
      />
    </section>
  );
};

export default LoginPage;
