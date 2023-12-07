# typescript-objects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are objects used for?
  They are used to store collections of data and more complex entities. They act like containers for named values, called properties and methods.

- What are object properties?
  Object properties are essentially variables attached to objects. They hold values specific to that object.

- Describe object literal notation.
  const Omid: StudentProps = {
  firstName: 'Omid',
  lastName: 'Asadi',
  age: 36,
  livesInIrvine: true,
  };
  Same as object literal in js with the added annotation for TypeScript

- How do you remove a property from an object?
  delete operator

- What are the two ways to get or update the value of a property?
  Dot notation and bracket notation

- What is the purpose of interfaces in TypeScript?
  In TypeScript, interfaces are used to define the shape of an object. They provide a way to define the structure of an object, specifying which properties exist on an object and their types. Interfaces help in type-checking and are especially useful in large codebases for maintaining consistent structures across objects and components.

- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?
  Optional properties in a TypeScript interface are properties that may or may not be present in an object adhering to the interface. They are marked with a ? after the property name. Mandatory properties, on the other hand, must be present. Optional properties are useful because they allow for flexibility in objects.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
