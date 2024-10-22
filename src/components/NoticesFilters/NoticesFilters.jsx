import clsx from 'clsx';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getCategories,
  getCities,
  getGenders,
  getSpecies,
} from '../../redux/notices/operations.js';
import {
  selectCategories,
  selectCities,
  selectGenders,
  selectSpecies,
} from '../../redux/notices/selectors.js';
import { DEFAULT_OPTION } from '../../constants/index.js';
import { categoryStyles, locationStyles, speciesStyles } from '../../constants/selectStyles.js';
import { sprite } from '../../assets/icons/index.js';
import SearchField from '../SearchField/SearchField.jsx';
import s from './NoticesFilters.module.scss';

const NoticesFilters = ({
  handleSearchSubmit,
  keyword,
  setKeyword,
  handleCategoriesChange,
  handleSpeciesChange,
  handleSexChange,
  handleLocationChange,
  handleSortByPopularity,
  handleSortByPrice,
  radioValue,
  handleCrossBtnClick,
}) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const genders = useSelector(selectGenders);
  const species = useSelector(selectSpecies);
  const cities = useSelector(selectCities);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGenders());
    dispatch(getSpecies());
    dispatch(getCities());
  }, [dispatch]);

  return (
    <form className={s.form} onSubmit={handleSearchSubmit}>
      <SearchField
        className={s.input}
        keyword={keyword}
        handleSearchSubmit={handleSearchSubmit}
        setKeyword={setKeyword}
        labelClassName={s.searchLabel}
      />
      <div className={s.categoryWrapper}>
        <Select
          styles={categoryStyles}
          placeholder="Category"
          options={[DEFAULT_OPTION, ...categories]}
          onChange={handleCategoriesChange}
        />
        <Select
          styles={categoryStyles}
          placeholder="By gender"
          options={[DEFAULT_OPTION, ...genders]}
          onChange={handleSexChange}
        />
      </div>
      <Select
        styles={speciesStyles}
        placeholder="By type"
        options={[DEFAULT_OPTION, ...species]}
        onChange={handleSpeciesChange}
      />
      <Select
        styles={locationStyles}
        placeholder="Location"
        options={[DEFAULT_OPTION, ...cities]}
        onChange={handleLocationChange}
      />
      <fieldset className={s.fieldset}>
        <label className={clsx(s.radioLabel, radioValue === 'popular' && s.checked)}>
          Popular
          <input
            type="radio"
            className={s.visuallyHidden}
            name="sortBy"
            value="popular"
            onChange={handleSortByPopularity}
          />
          {radioValue === 'popular' && (
            <button className={s.crossBtn} type="button" onClick={handleCrossBtnClick}>
              <svg className={s.icon} width="18" height="18">
                <use xlinkHref={`${sprite}#icon-cross-small`}></use>
              </svg>
            </button>
          )}
        </label>
        <label className={clsx(s.radioLabel, radioValue === 'unpopular' && s.checked)}>
          Unpopular
          <input
            type="radio"
            className={s.visuallyHidden}
            name="sortBy"
            value="unpopular"
            onChange={handleSortByPopularity}
          />
          {radioValue === 'unpopular' && (
            <button className={s.crossBtn} type="button" onClick={handleCrossBtnClick}>
              <svg className={s.icon} width="18" height="18">
                <use xlinkHref={`${sprite}#icon-cross-small`}></use>
              </svg>
            </button>
          )}
        </label>
        <label className={clsx(s.radioLabel, radioValue === 'cheap' && s.checked)}>
          Cheap
          <input
            type="radio"
            className={s.visuallyHidden}
            name="sortBy"
            value="cheap"
            onChange={handleSortByPrice}
          />
          {radioValue === 'cheap' && (
            <button className={s.crossBtn} type="button" onClick={handleCrossBtnClick}>
              <svg className={s.icon} width="18" height="18">
                <use xlinkHref={`${sprite}#icon-cross-small`}></use>
              </svg>
            </button>
          )}
        </label>
        <label className={clsx(s.radioLabel, radioValue === 'expensive' && s.checked)}>
          Expensive
          <input
            type="radio"
            className={s.visuallyHidden}
            name="sortBy"
            value="expensive"
            onChange={handleSortByPrice}
          />
          {radioValue === 'expensive' && (
            <button className={s.crossBtn} type="button" onClick={handleCrossBtnClick}>
              <svg className={s.icon} width="18" height="18">
                <use xlinkHref={`${sprite}#icon-cross-small`}></use>
              </svg>
            </button>
          )}
        </label>
      </fieldset>
    </form>
  );
};

export default NoticesFilters;
