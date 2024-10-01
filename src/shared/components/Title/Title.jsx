import clsx from 'clsx';
import s from './Title.module.scss';

const Title = ({ title, className, ...rest }) => {
  return (
    <h2 className={clsx(s.title, className && className)} {...rest}>
      {title}
    </h2>
  );
};

export default Title;
