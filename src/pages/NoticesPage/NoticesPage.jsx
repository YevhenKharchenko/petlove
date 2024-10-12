import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectNotices, selectTotalPages } from '../../redux/notices/selectors.js';
import { getNotices } from '../../redux/notices/operations.js';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import Title from '../../shared/components/Title/Title.jsx';
import s from './NoticesPage.module.scss';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const totalPages = useSelector(selectTotalPages);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getNotices({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <main className={s.main}>
      <section className={s.section}>
        <Container className={s.noticesContainer}>
          <Title title="Find your favorite pet" />
          <NoticesFilters />
          <NoticesList notices={notices} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Container>
      </section>
    </main>
  );
};

export default NoticesPage;
