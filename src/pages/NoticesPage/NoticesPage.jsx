import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectNotices, selectNoticesTotalPages } from '../../redux/notices/selectors.js';
import {
  getCategories,
  getGenders,
  getNotices,
  getSpecies,
} from '../../redux/notices/operations.js';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import Title from '../../shared/components/Title/Title.jsx';
import s from './NoticesPage.module.scss';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const totalPages = useSelector(selectNoticesTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [species, setSpecies] = useState('');

  useEffect(() => {
    dispatch(getNotices({ page: currentPage, keyword: searchTerm, category, species }));
  }, [dispatch, currentPage, searchTerm, category, species]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setCurrentPage(1);
    setSearchTerm(keyword);
  };

  const handleCategoriesChange = selectedOption => {
    setCategory(selectedOption.value);
  };
  const handleSpeciesChange = selectedOption => {
    setSpecies(selectedOption.value);
  };

  return (
    <main className={s.main}>
      <section className={s.section}>
        <Container className={s.noticesContainer}>
          <Title title="Find your favorite pet" />
          <NoticesFilters
            handleSearchSubmit={handleSearchSubmit}
            keyword={keyword}
            setKeyword={setKeyword}
            handleCategoriesChange={handleCategoriesChange}
            handleSpeciesChange={handleSpeciesChange}
          />
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
