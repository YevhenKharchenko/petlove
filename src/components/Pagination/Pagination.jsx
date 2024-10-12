import clsx from 'clsx';
import { useIsTablet } from '../../hooks/index.js';
import PageBtn from '../PageBtn/PageBtn.jsx';
import s from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isTablet = useIsTablet();

  const renderPageNumbers = () => {
    const pages = [];
    const pagesToShow = isTablet ? 3 : 2;
    const startPage = Math.max(1, Math.min(currentPage, totalPages - pagesToShow + 1));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (endPage === totalPages || endPage === totalPages - 1) {
      pages.push(
        <span className={s.dots} key="dots1">
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      const active = i === currentPage;
      pages.push(
        <button
          className={clsx(s.btn, active && s.active)}
          key={i}
          onClick={() => onPageChange(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages - 1) {
      pages.push(
        <span className={s.dots} key="dots2">
          ...
        </span>
      );
    }

    return pages;
  };

  return (
    totalPages > 1 && (
      <div className={s.pagination}>
        <div className={s.arrowWrapper}>
          <PageBtn
            icon="arrow-left"
            isDouble={true}
            handleClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          />
          <PageBtn
            icon="arrow-left"
            handleClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
        </div>
        <div className={s.pagesBtnWrapper}>{renderPageNumbers()}</div>
        <div className={s.arrowWrapper}>
          <PageBtn
            icon="arrow-right"
            handleClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <PageBtn
            icon="arrow-right"
            isDouble={true}
            handleClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </div>
      </div>
    )
  );
};

export default Pagination;
