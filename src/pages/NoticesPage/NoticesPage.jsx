import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectNotices, selectNoticesTotalPages } from '../../redux/notices/selectors.js';
import { getNotices } from '../../redux/notices/operations.js';
import { getCurrentUser } from '../../redux/auth/operations.js';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import Title from '../../shared/components/Title/Title.jsx';
import DocumentTitle from '../../components/DocumentTitle.jsx';
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
  const [sex, setSex] = useState('');
  const [location, setLocation] = useState('');
  const [sortByPopularity, setSortByPopularity] = useState(false);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  useEffect(() => {
    dispatch(
      getNotices({
        page: currentPage,
        keyword: searchTerm,
        category,
        species,
        sex,
        locationId: location,
        popularity: sortByPopularity,
        price: sortByPrice,
      })
    );
    dispatch(getCurrentUser());
  }, [
    dispatch,
    currentPage,
    searchTerm,
    category,
    species,
    sex,
    location,
    sortByPopularity,
    sortByPrice,
  ]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setCurrentPage(1);
    setSearchTerm(keyword);
  };

  const handleCategoriesChange = selectedOption => {
    setCurrentPage(1);
    setCategory(selectedOption.value);
  };

  const handleSpeciesChange = selectedOption => {
    setCurrentPage(1);
    setSpecies(selectedOption.value);
  };

  const handleSexChange = selectedOption => {
    setCurrentPage(1);
    setSex(selectedOption.value);
  };

  const handleLocationChange = selectedOption => {
    setCurrentPage(1);
    setLocation(selectedOption.value);
  };

  const handleSortByPopularity = e => {
    setCurrentPage(1);
    setSortByPopularity(true);
    setSortByPrice(false);
    setRadioValue(e.target.value);
  };

  const handleSortByPrice = e => {
    setCurrentPage(1);
    setSortByPrice(true);
    setSortByPopularity(false);
    setRadioValue(e.target.value);
  };

  const handleCrossBtnClick = () => {
    setCurrentPage(1);
    setRadioValue('');
    setSortByPopularity(false);
    setSortByPrice(false);
  };

  return (
    <main className={s.main}>
      <DocumentTitle>Notices</DocumentTitle>
      <section className={s.section}>
        <Container className={s.noticesContainer}>
          <Title title="Find your favorite pet" />
          <NoticesFilters
            handleSearchSubmit={handleSearchSubmit}
            keyword={keyword}
            setKeyword={setKeyword}
            handleCategoriesChange={handleCategoriesChange}
            handleSpeciesChange={handleSpeciesChange}
            handleSexChange={handleSexChange}
            handleLocationChange={handleLocationChange}
            handleSortByPopularity={handleSortByPopularity}
            handleSortByPrice={handleSortByPrice}
            radioValue={radioValue}
            handleCrossBtnClick={handleCrossBtnClick}
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
