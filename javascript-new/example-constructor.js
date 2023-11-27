function ExampleConstructor() {}

const exampleConstructorPrototype = ExampleConstructor.prototype;
console.log('example conststructor Prototype', exampleConstructorPrototype);
console.log('type of:', typeof ExampleConstructorPrototype);

const practiceConstructor = new ExampleConstructor();
Object.getPrototypeOf(practiceConstructor);

console.log(
  'Instance of ExampleConstructor?',
  practiceConstructor instanceof ExampleConstructor
);
