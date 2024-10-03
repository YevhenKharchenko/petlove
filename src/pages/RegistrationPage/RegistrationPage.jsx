import { Link } from 'react-router-dom';
import {
  registerImg,
  registerImg2x,
  registerImgTab,
  registerImgTab2x,
  registerImgDesk,
  registerImgDesk2x,
} from '../../assets/images/index.js';
import Title from '../../shared/components/Title/Title.jsx';
import PetBlock from '../../shared/components/PetBlock/PetBlock.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import s from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  return (
    <section className={s.section}>
      <Container className={s.authContainer}>
        <PetBlock
          mob={registerImg}
          mob2x={registerImg2x}
          tab={registerImgTab}
          tab2x={registerImgTab2x}
          desk={registerImgDesk}
          desk2x={registerImgDesk2x}
          alt="Cat"
        />
        <div className={s.formWrapper}>
          <div className={s.formContainer}>
            <Title title="Registration" />
            <p className={s.text}>Thank you for your interest in our platform.</p>
            <RegistrationForm />
            <div className={s.linkWrapper}>
              <p className={s.linkText}>Already have an account?&nbsp;</p>
              <Link className={s.link} to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RegistrationPage;
