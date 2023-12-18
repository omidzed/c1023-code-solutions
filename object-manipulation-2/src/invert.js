function invert(source) {
  const keys = [];
  const values = [];
  const object = {};
  for (const key in source) {
    keys.push(source[key]);
  }
  for (const key in source) {
    values.push(key);
  }
  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i];
  }
  return object;
}
