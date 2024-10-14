import { Link } from 'react-router-dom';
import {
  notFoundImg,
  notFoundImg2x,
  notFoundImgDesk,
  notFoundImgDesk2x,
  notFoundImgTab,
  notFoundImgTab2x,
} from '../../assets/images/index.js';
import { BREAKPOINT } from '../../constants/index.js';
import Container from '../../shared/components/Container/Container.jsx';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <main className={s.main}>
      <section>
        <Container>
          <div className={s.background}>
            <div className={s.imgWrapper}>
              <span className={s.span}>4</span>
              <picture>
                <source
                  srcSet={`${notFoundImgDesk} 1x, ${notFoundImgDesk2x} 2x`}
                  media={`(min-width:${BREAKPOINT.DESKTOP}px)`}
                />
                <source
                  srcSet={`${notFoundImgTab} 1x, ${notFoundImgTab2x} 2x`}
                  media={`(min-width:${BREAKPOINT.TABLET}px)`}
                />
                <img
                  className={s.img}
                  srcSet={`${notFoundImg} 1x, ${notFoundImg2x} 2x`}
                  alt="Cat"
                  width="109"
                  height="109"
                />
              </picture>
              <span className={s.span}>4</span>
            </div>
            <p className={s.text}>Ooops! This page not found :&#40;</p>
            <Link to="/home" className={s.link}>
              To home page
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default NotFoundPage;
