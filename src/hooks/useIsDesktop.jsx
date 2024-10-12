import { useMediaQuery } from 'react-responsive';
import { BREAKPOINT } from '../constants/index.js';

export const useIsDesktop = () => {
  return useMediaQuery({
    query: `(min-width: ${BREAKPOINT.DESKTOP}px)`,
  });
};
