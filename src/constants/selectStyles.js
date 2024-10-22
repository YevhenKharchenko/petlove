import { BREAKPOINT, STYLES } from './index.js';

const baseStyles = {
  control: (provided, state, customStyles = {}) => ({
    ...provided,
    width: '100%',
    height: '42px',
    borderRadius: '30px',
    border: state.isFocused
      ? `1px solid ${STYLES.PRIMARY_ACCENT_COLOR}`
      : `1px solid ${STYLES.PRIMARY_BORDER_COLOR}`,
    boxShadow: 'none',
    fontFamily: STYLES.PRIMARY_FONT_FAMILY,
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '1.28571',
    color: `${STYLES.PLACEHOLDER_COLOR}`,
    cursor: 'pointer',
    transition: 'border-color 0.5s ease',
    '&:hover': {
      border: `1px solid ${STYLES.PRIMARY_ACCENT_COLOR}`,
    },
    ...customStyles,
  }),
  option: provided => ({
    ...provided,
    fontFamily: STYLES.PRIMARY_FONT_FAMILY,
    fontWeight: '500',
    fontSize: '14px',
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    color: STYLES.PRIMARY_TEXT_COLOR,
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    color: STYLES.PRIMARY_TEXT_COLOR,
  }),
};

const responsiveStyles = {
  [`@media only screen and (min-width: ${BREAKPOINT.TABLET}px)`]: {
    width: '210px',
    height: '52px',
    fontSize: '16px',
  },
};

export const categoriesStyles = {
  ...baseStyles,
  control: (provided, state) =>
    baseStyles.control(provided, state, {
      [`@media only screen and (min-width: ${BREAKPOINT.MOBILE}px)`]: {
        ...responsiveStyles,
        width: '143px',
      },
      [`@media only screen and (min-width: ${BREAKPOINT.TABLET}px)`]: {
        ...responsiveStyles,
      },
    }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: STYLES.PLACEHOLDER_COLOR,
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    color: STYLES.PLACEHOLDER_COLOR,
  }),
};

export const categoryStyles = {
  ...baseStyles,
  control: (provided, state) =>
    baseStyles.control(provided, state, {
      [`@media only screen and (min-width: ${BREAKPOINT.MOBILE}px)`]: {
        width: '143px',
      },
      [`@media only screen and (min-width: ${BREAKPOINT.TABLET}px)`]: {
        width: '170px',
        height: '48px',
        fontSize: '16px',
      },
      [`@media only screen and (min-width: ${BREAKPOINT.DESKTOP}px)`]: {
        width: '170px',
      },
    }),
};

export const speciesStyles = {
  ...baseStyles,
  control: (provided, state) =>
    baseStyles.control(provided, state, {
      [`@media only screen and (min-width: ${BREAKPOINT.TABLET}px)`]: {
        width: '190px',
        height: '48px',
        fontSize: '16px',
      },
    }),
};

export const locationStyles = {
  ...baseStyles,
  control: (provided, state) =>
    baseStyles.control(provided, state, {
      [`@media only screen and (min-width: ${BREAKPOINT.TABLET}px)`]: {
        width: '227px',
        height: '48px',
        fontSize: '16px',
      },
    }),
};
