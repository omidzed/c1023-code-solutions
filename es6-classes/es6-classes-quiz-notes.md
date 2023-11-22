# es6-classes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are JavaScript classes?
Syntactic sugar over the existing prototype-based inheritance. They provide a clearer and more simplified syntax for creating objects and dealing with inheritance.

- When would you want to use a class?
When you have objects that share common properties and methods, and you want to model this in a structured way.

- How do you declare a class?
With the class keyword and constructor method.

- How do you inherit from another class?
Extends
class Student extends Person {
  constructor() {
    super();}
  }
- Why would you want to inherit from another class?
When you share common traits and it can be beneficial or efficient to share those characteristics and get utility from them.

- How do you add methods and properties to a class?
Inside the class declaration, you can define methods directly. For properties, you usually define them inside the constructor using this keyword For example:

class MyClass {
  constructor(name) {
    this.name = name; // Property
  }

  myMethod() {
    // Method
    console.log("Hello, " + this.name);
  }


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
