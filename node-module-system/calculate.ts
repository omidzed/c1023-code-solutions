import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const num1: number = Number(process.argv[2]);
const operation = process.argv[3];
const num2: number = Number(process.argv[4]);

let result: number;

switch (operation) {
  case 'plus':
    result = add(num1, num2);
    console.log('Result: ', result);
    break;
  case 'minus':
    result = subtract(num1, num2);
    console.log('Result: ', result);
    break;
  case 'times':
    result = multiply(num1, num2);
    console.log('Result: ', result);
    break;
  case 'over':
    result = divide(num1, num2);
    console.log('Result: ', result);
    break;
}
