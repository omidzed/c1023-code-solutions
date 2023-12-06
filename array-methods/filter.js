const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evens = numbers.filter((n) => n % 2 === 0);
console.log('Evens:', evens);


const noDs = names.filter((n) => !n.toLowerCase().includes('d'));
console.log('No Ds:', noDs);
