export const convertToMinAndSec = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const minAndSec = `${minutes} min, ${seconds} sec`;
  return minAndSec;
};
