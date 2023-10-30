/* exported getValues */

function getValues(obj) {
  const values = [];

  for (const key in obj) {
    values.push(obj[key]);
  }

  return values;
}
