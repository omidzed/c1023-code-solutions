function convertMinutesToSeconds(minutes: number): number {
  const number: number = minutes * 60;
  return number;
}
const convertMinutesToSecondsResult: number = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult', convertMinutesToSecondsResult);

function greet(name: string): string {
  const greeting: string = 'Hi ' + name + '!';
  return greeting;
}
const greetResult: string = greet('Bob');
console.log('Greeting message:', greetResult);

function getArea(width: number, height: number): number {
  const area: number = width * height;
  return area;
}

console.log('Area of rectangle:', getArea(2, 5));

interface Person {
  firstName: string;
  lastName: string;
}

function getFirstName(person: Person): string {
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
