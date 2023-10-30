/* exported filterOutStrings */

function filterOutStrings(values) {
  const noStrings = [];
  values.forEach(function (value) {
    if (typeof value !== 'string') {
      noStrings.push(value);
    }
  });
  return noStrings;
}
