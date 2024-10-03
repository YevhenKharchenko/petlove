export const checkPasswordMatch = (password, matchedPassword, setIsPasswordMatch) => {
  setIsPasswordMatch(matchedPassword === password);
};
