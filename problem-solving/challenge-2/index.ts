export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {

  let arr: number[] = [0, 0, 0, 0, 0, 0];
  if (dice1 > 0 && dice1 < 7) {
    arr[dice1 - 1]++;
  }

  if (dice2 > 0 && dice2 < 7) {
    arr[dice2 - 1]++;
  }
  if (dice3 > 0 && dice3 < 7) {
    arr[dice3 - 1]++;
  }

  if (dice1 <= 0 || dice1 > 6 || dice2 <= 0 || dice2 > 6 || dice3 <= 0 || dice3 > 6) {
    throw new Error('Dice out of number range');
  }

  const max = Math.max(...arr);

  if (max === 3) return (arr.indexOf(max) + 1) * 3;
  if (max === 2) return (arr.indexOf(max) + 1) * 2;

  for (let index: number = arr.length - 1; index >= 0; index--) {
    if (arr[index] > 0) return index + 1;
  }

  return 0;
};
