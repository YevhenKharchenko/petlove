import { useMediaQuery } from 'react-responsive';
import { BREAKPOINT } from '../constants/index.js';

export const useIsTablet = () => {
  return useMediaQuery({
    query: `(min-width: ${BREAKPOINT.TABLET}px)`,
  });
};
