/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const stringArray = string.split('');
  const temp = stringArray[firstIndex];
  stringArray[firstIndex] = stringArray[secondIndex];
  stringArray[secondIndex] = temp;
  return stringArray.join('');
}
