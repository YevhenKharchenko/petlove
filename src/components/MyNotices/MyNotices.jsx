import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectFavorites, selectViews } from '../../redux/auth/selectors.js';
import Button from '../../shared/components/Button/Button.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import s from './MyNotices.module.scss';

const MyNotices = () => {
  const favorites = useSelector(selectFavorites);
  const views = useSelector(selectViews);
  const [option, setOption] = useState([]);

  useEffect(() => {
    setOption(favorites);
  }, [favorites]);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.btnWrapper}>
          <Button
            title="My favorite pets"
            className={clsx(s.btn, option === favorites && s.option)}
            onClick={() => {
              setOption(favorites);
            }}
          />
          <Button
            title="Viewed"
            className={clsx(s.btn, option === views && s.option)}
            onClick={() => {
              setOption(views);
            }}
          />
        </div>
        <ul className={s.list}>
          {option.map(el => (
            <li key={el._id}>
              <NoticesItem item={el} isFavorites={option === favorites} />
            </li>
          ))}
        </ul>
        {!option.length && (
          <p className={s.textEmpty}>
            Oops, <span className={s.span}>looks like there aren&apos;t any furries</span> on our
            adorable page yet. Do not worry! View your pets on the &quot;find your favorite
            pet&quot; page and add them to your favorites.
          </p>
        )}
      </Container>
    </section>
  );
};

export default MyNotices;
