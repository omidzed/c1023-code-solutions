function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('Converted to seconds:', convertMinutesToSeconds(5));

function greet(name) {
  return `Hey ${name}!`;
}
console.log('Greeting message:', greet('Bob'));

function getArea(width, height) {
  return width * height;
}
console.log('Area of rectangle:', getArea(2, 5));

function getFirstName(person) {
  return person.firstName;
}
const person = { firstName: 'Jack', lastName: 'Bauer' };
console.log("Person's first name:", getFirstName(person));

function getLastElement(array) {
  return array[array.length - 1];
}
const array = [1, 2, 5, 500];
console.log('Last element of this array:', getLastElement(array));
