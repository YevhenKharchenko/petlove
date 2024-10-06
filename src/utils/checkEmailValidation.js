import { REGEX } from '../constants/index.js';

export const checkEmailValidation = (email, setIsEmailValid) => {
  setIsEmailValid(email && email.match(REGEX.EMAIL));
};
