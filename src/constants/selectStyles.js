export const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    width: window.innerWidth <= 768 ? '143px' : '210px',
    height: window.innerWidth <= 768 ? '42px' : '52px',
    borderRadius: '30px',
    border: state.isFocused ? '1px solid #f6b83d' : '1px solid rgba(38, 38, 38, 0.15)',
    boxShadow: 'none',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '1.28571',
    color: 'rgba(38, 38, 38, 0.5)',
    cursor: 'pointer',
  }),
  option: provided => ({
    ...provided,
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '500',
    fontSize: '14px',
  }),
};
