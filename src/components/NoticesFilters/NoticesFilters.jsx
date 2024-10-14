import { selectStyles } from '../../constants/selectStyles.js';
import Select from 'react-select';
import SearchField from '../SearchField/SearchField.jsx';
import s from './NoticesFilters.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, getGenders, getSpecies } from '../../redux/notices/operations.js';
import { selectCategories, selectGenders, selectSpecies } from '../../redux/notices/selectors.js';

const NoticesFilters = ({
  handleSearchSubmit,
  keyword,
  setKeyword,
  handleCategoriesChange,
  handleSpeciesChange,
}) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const genders = useSelector(selectGenders);
  const species = useSelector(selectSpecies);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGenders());
    dispatch(getSpecies());
  }, [dispatch]);

  return (
    <form className={s.form} onSubmit={handleSearchSubmit}>
      <SearchField
        className={s.input}
        keyword={keyword}
        handleSearchSubmit={handleSearchSubmit}
        setKeyword={setKeyword}
      />
      <Select
        styles={selectStyles}
        placeholder="Category"
        options={categories}
        onChange={handleCategoriesChange}
      />
      <Select styles={selectStyles} placeholder="By gender" options={genders} />
      <Select
        styles={selectStyles}
        placeholder="By type"
        options={species}
        onChange={handleSpeciesChange}
      />
    </form>
  );
};

export default NoticesFilters;
