import clsx from 'clsx';
import { sprite } from '../../assets/icons/index.js';
import Input from '../../shared/components/Input/Input.jsx';
import s from './SearchField.module.scss';

const SearchField = ({
  keyword,
  setKeyword,
  handleSearchSubmit,
  className,
  labelClassName,
  placeholder = 'Search',
}) => {
  const handleInputChange = e => {
    setKeyword(e.target.value);
  };

  const handleCrossClick = () => {
    setKeyword('');
  };

  return (
    <label className={clsx(s.label, labelClassName && labelClassName)}>
      <Input
        className={clsx(s.input, className && className)}
        placeholder={placeholder}
        value={keyword}
        onChange={handleInputChange}
      />
      <button type="submit" className={s.btn} aria-label="Search" onClick={handleSearchSubmit}>
        <svg className={s.icon} width="18" height="18">
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </button>
      {keyword && (
        <button
          type="button"
          className={s.crossBtn}
          onClick={handleCrossClick}
          aria-label="Clear search input"
        >
          <svg className={s.icon} width="18" height="18">
            <use xlinkHref={`${sprite}#icon-cross-small`}></use>
          </svg>
        </button>
      )}
    </label>
  );
};

export default SearchField;
