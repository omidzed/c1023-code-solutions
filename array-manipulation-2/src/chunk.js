/* exported chunk */

function chunk(array, size) {
  const chunksArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunksArray.push(array.slice(i, i + size));
  }
  return chunksArray;
}
