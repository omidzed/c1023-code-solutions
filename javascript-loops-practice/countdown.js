/* exported countdown */

function countdown(number) {
  const numbersArray = [];
  while (number >= 0) {
    numbersArray.push(number);
    number--;
  }
  return numbersArray;
}
