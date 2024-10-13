import clsx from 'clsx';
import { sprite } from '../../assets/icons/index.js';
import Input from '../../shared/components/Input/Input.jsx';
import s from './SearchField.module.scss';

const SearchField = ({ value, handleChange, handleSubmit, className }) => {
  const handleInputChange = e => {
    handleChange(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit();
  };

  const handleCrossClick = () => {
    handleChange('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <Input
        className={clsx(s.input, className && className)}
        placeholder="Search"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit" className={s.btn} aria-label="Search">
        <svg className={s.icon} width="18" height="18">
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </button>
      {value && (
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
    </form>
  );
};

export default SearchField;
