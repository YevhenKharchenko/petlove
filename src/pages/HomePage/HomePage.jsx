import Container from '../../shared/components/Container/Container.jsx';
import {
  homeImg,
  homeImg2x,
  homeImgTab,
  homeImgTab2x,
  homeImgDesk,
  homeImgDesk2x,
} from '../../assets/images/index.js';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.heroWrapper}>
          <h1 className={s.title}>
            Take good <span className={s.span}>care</span> of your small pets
          </h1>
          <p className={s.text}>
            Choosing a pet for your home is a choice that is meant to enrich your life with
            immeasurable joy and tenderness.
          </p>
        </div>
        <div>
          <picture>
            <source srcSet={`${homeImgDesk} 1x, ${homeImgDesk2x} 2x`} media="(min-width: 1440px)" />
            <source srcSet={`${homeImgTab} 1x, ${homeImgTab2x} 2x`} media="(min-width: 768px)" />
            <img
              className={s.img}
              srcSet={`${homeImg} 1x, ${homeImg2x} 2x`}
              alt="Girl with dog"
              width=""
              height=""
            />
          </picture>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;