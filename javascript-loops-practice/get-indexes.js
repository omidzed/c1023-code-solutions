/* exported getIndexes */

function getIndexes(array) {
  let index = 0;
  const indexesArray = [];
  while (index < array.length) {
    indexesArray.push(index);
    index++;
  }
  return indexesArray;
}
