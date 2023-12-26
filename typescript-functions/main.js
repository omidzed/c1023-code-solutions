function convertMinutesToSeconds(minutes) {
  var number = minutes * 60;
  return number;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult', convertMinutesToSecondsResult);
function greet(name) {
  var greeting = 'Hi ' + name + '!';
  return greeting;
}
var greetResult = greet('Bob');
console.log('Greeting message:', greetResult);
function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('Area of rectangle:', getArea(2, 5));
function getFirstName(person) {
  return person.firstName;
}
console.log(
  "Person's first name:",
  getFirstName({ firstName: 'David', lastName: 'Hasselhoff' })
);
// function getLastElement(array: string[]): string {
//   const lastIndex: number = array.length - 1;
//   const lastElement: string = array[lastIndex];
//   return lastElement;
// }
// const getLastElementResult = getLastElement: string[]([
//   'propane',
//   'and',
//   'propane',
//   'accessories',
// ]);
// console.log('getLastElementResult:', getLastElementResult);
