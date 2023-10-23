const width = 2;
const height = 5;
const area = width * height;

console.log('Value of Area: ', area);
console.log('typeof Area: ', typeof area);

const bill = 1000;
const payment = 800;
const change = bill - payment;
console.log('Value of change: ', change);
console.log('typeof change: ', typeof change);

const quizzes = 50;
const midterm = 90;
const final = 100;
const grade = (quizzes + midterm + final) / 3;
console.log('Value of grade: ', grade);
console.log('typeof grade: ', typeof grade);

const firstName = 'Omid';
const lastName = 'Asadi';
const fullName = firstName + ' ' + lastName;
console.log('Value of fullName: ', fullName);
console.log('typeof fullName: ', typeof fullName);

const pH = 10;
const isAcidic = (pH < 7);
console.log('Value of isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

const headCount = 11;
const isSparta = (headCount === 300);
console.log('Value of isSparta: ', isSparta);
console.log('typeof isSparta: ', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log('Value of motto: ', motto);
console.log('tyoeof motto: ', typeof motto);
