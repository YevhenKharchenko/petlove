import Container from '../../shared/components/Container/Container.jsx';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <section className={s.hero}>
      <div className={s.heroWrapper}>
        <Container className={s.heroContainer}>
          <h1 className={s.title}>
            Take good <span className={s.span}>care</span> of your small pets
          </h1>
          <p className={s.text}>
            Choosing a pet for your home is a choice that is meant to enrich your life with
            immeasurable joy and tenderness.
          </p>
        </Container>
      </div>
    </section>
  );
};

export default HomePage;
