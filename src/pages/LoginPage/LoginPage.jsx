import { Link } from 'react-router-dom';
import {
  loginImg,
  loginImg2x,
  loginImgTab,
  loginImgTab2x,
  loginImgDesk,
  loginImgDesk2x,
} from '../../assets/images/index.js';
import Title from '../../shared/components/Title/Title.jsx';
import PetBlock from '../../shared/components/PetBlock/PetBlock.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={s.section}>
      <Container className={s.loginContainer}>
        <PetBlock
          mob={loginImg}
          mob2x={loginImg2x}
          tab={loginImgTab}
          tab2x={loginImgTab2x}
          desk={loginImgDesk}
          desk2x={loginImgDesk2x}
          alt="Dog"
        />
        <div className={s.formWrapper}>
          <div className={s.formContainer}>
            <Title title="Log in" />
            <p className={s.text}>
              Welcome! Please enter your credentials to login to the platform:
            </p>
            <LoginForm />
            <div className={s.linkWrapper}>
              <p className={s.linkText}>Don’t have an account?&nbsp;</p>
              <Link className={s.link} to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
