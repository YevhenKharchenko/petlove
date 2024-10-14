import Container from '../../shared/components/Container/Container.jsx';
import {
  homeImg,
  homeImg2x,
  homeImgTab,
  homeImgTab2x,
  homeImgDesk,
  homeImgDesk2x,
} from '../../assets/images/index.js';
import { BREAKPOINT } from '../../constants/index.js';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <main className={s.hero}>
      <Container>
        <section className={s.heroWrapper}>
          <h1 className={s.title}>
            Take good <span className={s.span}>care</span> of your small pets
          </h1>
          <p className={s.text}>
            Choosing a pet for your home is a choice that is meant to enrich your life with
            immeasurable joy and tenderness.
          </p>
        </section>
        <section className={s.picSection}>
          <picture>
            <source
              srcSet={`${homeImgDesk} 1x, ${homeImgDesk2x} 2x`}
              media={`(min-width:${BREAKPOINT.DESKTOP}px)`}
            />
            <source
              srcSet={`${homeImgTab} 1x, ${homeImgTab2x} 2x`}
              media={`(min-width:${BREAKPOINT.TABLET}px)`}
            />
            <source
              srcSet={`${homeImg} 1x, ${homeImg2x} 2x`}
              media={`(max-width:${BREAKPOINT.TABLET - 1}px)`}
            />
            <img className={s.img} srcSet={homeImg} alt="Girl with dog" width="335" height="402" />
          </picture>
        </section>
      </Container>
    </main>
  );
};

export default HomePage;
