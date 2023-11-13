/* exported omit */

function omit(source, keys) {
  const result = {...source};

  let i = 0;
  while (i < keys.length) {
    const key = keys[i];
    if (source[key] !== undefined) {
      delete result[key];
    }
    i++;
    console.log(result);
  }
  return result;
}
