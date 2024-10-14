import SearchField from '../SearchField/SearchField.jsx';
import s from './NoticesFilters.module.scss';

const NoticesFilters = ({ handleSearchSubmit, keyword, setKeyword }) => {
  return (
    <form className={s.form} onSubmit={handleSearchSubmit}>
      <SearchField
        className={s.input}
        keyword={keyword}
        handleSearchSubmit={handleSearchSubmit}
        setKeyword={setKeyword}
      />
    </form>
  );
};

export default NoticesFilters;
