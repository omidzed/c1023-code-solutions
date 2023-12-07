interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const Omid: StudentProps = {
  firstName: 'Omid',
  lastName: 'Asadi',
  age: 36,
  livesInIrvine: true,
};
console.log('Omid: ', Omid);

const fullName: string = Omid.firstName + Omid.lastName;
console.log('fullName: ', fullName);

Omid.livesInIrvine = true;
Omid.previousOccupation = 'student';

console.log('Omid.livesInIrvine: ', Omid.livesInIrvine);
console.log('Omid.previousOccupation: ', Omid.previousOccupation);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const car: Vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2000,
};

console.log('car: ', car);

interface Pet {
  name?: string;
  kind?: string;
}

const doggie: Pet = {
  name: 'Max',
  kind: 'canine',
};

delete doggie.kind;
delete doggie.name;

console.log('doggie: ', doggie);
