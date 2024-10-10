export const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    width: '143px',
    height: '42px',
    borderRadius: '30px',
    border: state.isFocused ? '1px solid #f6b83d' : '1px solid rgba(38, 38, 38, 0.15)',
    boxShadow: 'none',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '1.28571',
    color: 'rgba(38, 38, 38, 0.5)',
    cursor: 'pointer',
    transition: 'border-color 0.5s ease',
    '&:hover': {
      border: '1px solid #f6b83d',
    },
    '@media only screen and (min-width: 768px)': {
      width: '210px',
      height: '52px',
    },
  }),
  option: provided => ({
    ...provided,
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '14px',
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
};
