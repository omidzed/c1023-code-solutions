var Omid = {
  firstName: 'Omid',
  lastName: 'Asadi',
  age: 36,
  livesInIrvine: true,
};
console.log('Omid: ', Omid);
var fullName = Omid.firstName + Omid.lastName;
console.log('fullName: ', fullName);
Omid.livesInIrvine = true;
Omid.previousOccupation = 'student';
console.log('Omid.livesInIrvine: ', Omid.livesInIrvine);
console.log('Omid.previousOccupation: ', Omid.previousOccupation);
var car = {
  make: 'Honda',
  model: 'Civic',
  year: 2000,
};
console.log('car: ', car);
var doggie = {
  name: 'Max',
  kind: 'canine',
};
delete doggie.kind;
delete doggie.name;
console.log('doggie: ', doggie);
