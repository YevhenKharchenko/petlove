import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectNews, selectNewsTotalPages } from '../../redux/news/selectors.js';
import { getNews } from '../../redux/news/operations.js';
import Container from '../../shared/components/Container/Container.jsx';
import Title from '../../shared/components/Title/Title.jsx';
import NewsList from '../../components/NewsList/NewsList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import SearchField from '../../components/SearchField/SearchField.jsx';
import s from './NewsPage.module.scss';

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const totalPages = useSelector(selectNewsTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getNews({ page: currentPage, keyword: searchTerm }));
  }, [dispatch, currentPage, searchTerm]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleSearchSubmit = () => {
    setCurrentPage(1);
    setSearchTerm(keyword);
  };
  return (
    <main className={s.main}>
      <section className={s.section}>
        <Container className={s.newsContainer}>
          <div className={s.titleWrapper}>
            <Title title="News" />
            <SearchField
              value={keyword}
              handleChange={setKeyword}
              handleSubmit={handleSearchSubmit}
            />
          </div>
          <NewsList news={news} />
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

export default NewsPage;
