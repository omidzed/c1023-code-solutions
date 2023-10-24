const student = {
  firstName : 'Omid',
  lastName : 'Asadi',
  age : 36
}

const fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'amazon';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

const vehicle = {
  make: 'Ford',
  model: 'Boss 429',
  year: 1969
}

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log(`Value of vehicle['color']: `, vehicle['color']);
console.log(`Value of vehicle['isConvertible']: `, vehicle['isConvertible']);
console.log('Value of vehicle: ', vehicle);

const pet = {
  name: 'Rex',
  type: 'Dog'
}

delete pet.name;
delete pet.type;
console.log('Value of pet: ', pet);
