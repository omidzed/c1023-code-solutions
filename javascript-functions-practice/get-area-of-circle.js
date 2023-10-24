/* exported getAreaOfCircle */

function getAverageOfTwoNumbers(x, y) {
  return (x + y) / 2;
}

function getAverageOfThreeNumbers(x, y, z) {
  return (x + y + z) / 3;
}

function getAreaOfCircle(radius) {
  return Math.PI * radius ** 2;
}

function getRightTriangleArea(base, height) {
  return (base * height) / 2;
}

function getSquareOfNumber(number) {
  return number ** 2;
}

function getSumOfSquares(x, y) {
  return x ** 2 + y ** 2;
}

function getFirstElement(array) {
  return array[0];
}

function getSecondElement(array) {
  return array[1];
}

function getElementAtIndex(array, index) {
  return array[index];
}

function getLengthOfArray(array) {
  return array.length;
}

function getLastElement(array) {
  return array[array.length - 1];
}

function getFirstCharacter(string) {
  return string[0];
}

function getSecondCharacter(string) {
  return string[1];
}

function getCharacterAtIndex(string, index) {
  return string[index];
}

function getLengthOfString(string) {
  return string.length;
}

function getLastCharacter(string) {
  return string[string.length - 1];
}

function getLastNameOfPerson(person) {
  return person.lastName;
}

function getFullNameOfPerson(person) {
  return `${person.firstName} ${person.lastName}`;
}

function getDescriptionOfPerson(person) {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}

function getFirstInitialOfPerson(person) {
  return person.firstName[0];
}

function getInitialsOfPerson(person) {
  return person.firstName[0] + person.lastName[0];
}

function getPropertyValue(object, key) {
  return object[key];
}
