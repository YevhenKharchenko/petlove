import clsx from 'clsx';
import s from './PetBlock.module.scss';
import { BREAKPOINT } from '../../../constants/index.js';

const PetBlock = ({
  mob,
  mob2x,
  tab,
  tab2x,
  desk,
  desk2x,
  alt,
  width,
  height,
  className,
  ...rest
}) => {
  return (
    <picture>
      <source srcSet={`${desk} 1x, ${desk2x} 2x`} media={`(min-width:${BREAKPOINT.DESKTOP}px)`} />
      <source srcSet={`${tab} 1x, ${tab2x} 2x`} media={`(min-width:${BREAKPOINT.TABLET}px)`} />
      <img
        className={clsx(s.img, className && className)}
        srcSet={`${mob} 1x, ${mob2x} 2x`}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        {...rest}
      />
    </picture>
  );
};

export default PetBlock;
