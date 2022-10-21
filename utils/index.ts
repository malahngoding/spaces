/**
 */
export const utils = {};

export const getCurrentYear = (): string => {
  let year = new Date().getFullYear();
  return year.toString();
};
