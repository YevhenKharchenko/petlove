export const checkPasswordStrength = (password, setIsPasswordSecure) => {
  setIsPasswordSecure(password && password.length >= 7);
};
