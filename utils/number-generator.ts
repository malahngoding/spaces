export const numberGenerator = (min: number, max: number): number => {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
};
