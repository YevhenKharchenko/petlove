import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import Title from '../../shared/components/Title/Title.jsx';
import s from './NoticesPage.module.scss';

const NoticesPage = () => {
  return (
    <main className={s.main}>
      <Container>
        <section className={s.section}>
          <Title title="Find your favorite pet" />
          <NoticesFilters />
          <NoticesList />
        </section>
      </Container>
    </main>
  );
};

export default NoticesPage;
