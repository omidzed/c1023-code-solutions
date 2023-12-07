const width: number = 2;
const height: number = 5;
const area: number = width * height;

console.log('Value of Area: ', area);
console.log('typeof Area: ', typeof area);

const bill: number = 1000;
const payment: number = 1100;
const change: number = payment - bill;
console.log('Value of change: ', change);
console.log('typeof change: ', typeof change);

const quizzes: number = 50;
const midterm: number = 90;
const final: number = 100;
const grade: number = (quizzes + midterm + final) / 3;
console.log('Value of grade: ', grade);
console.log('typeof grade: ', typeof grade);

const firstName: string = 'Omid';
const lastName: string = 'Asadi';
const fullName: string = firstName + ' ' + lastName;
console.log('Value of fullName: ', fullName);
console.log('typeof fullName: ', typeof fullName);

const pH: number = 10;
const isAcidic: boolean = pH < 7;
console.log('Value of isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

const headCount: number = 11;
const isSparta: boolean = headCount === 300;
console.log('Value of isSparta: ', isSparta);
console.log('typeof isSparta: ', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('Value of motto: ', motto);
console.log('tyoeof motto: ', typeof motto);
