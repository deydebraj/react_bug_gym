export const formatSequence = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return String(num);
};
