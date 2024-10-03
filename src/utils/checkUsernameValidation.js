export const checkUsernameValidation = (username, setIsUsernameValid) => {
  setIsUsernameValid(typeof username === 'string' && username.length > 0);
};
