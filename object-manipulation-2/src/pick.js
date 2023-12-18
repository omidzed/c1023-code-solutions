/* exported pick */

function pick(source, keys) {
  const result = {};

  let i = 0;
  while (i < keys.length) {
    const key = keys[i];
    if (source[key] !== undefined) {
      result[key] = source[key];
    }
    i++;
  }
  return result;
}
