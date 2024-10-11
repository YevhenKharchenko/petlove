import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import Title from '../../shared/components/Title/Title.jsx';
import s from './NoticesPage.module.scss';

const NoticesPage = () => {
  return (
    <main className={s.main}>
      <section className={s.section}>
        <Container className={s.noticesContainer}>
          <Title title="Find your favorite pet" />
          <NoticesFilters />
          <NoticesList />
        </Container>
      </section>
    </main>
  );
};

export default NoticesPage;
