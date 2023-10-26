/* exported includesSeven */

function includesSeven(array) {
  const sevensArray = [];
  array.forEach(function (value) {
    if (value === 7) {
      sevensArray.push(value);
    }
  });
  return sevensArray.length > 0;
}
