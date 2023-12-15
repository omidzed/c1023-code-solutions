# unit-tests-jest-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are unit tests?
  A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.

- Why is it important to write unit tests?
  Identify problems early, facilitate change, simplify integration, and they serve as a form of documentation for the code. For someone new to the codebase, unit tests provide a quick way to understand how a unit is supposed to work.

- What code should be tested with a unit test? What code is not well suited for unit tests?
  Things that are well-suited for unit testing are code for core functionality, Conditional logic, Complex algorithms.
  And some thing that typically are not meant to be unit tested are external libraries or frameworks, user interface: Unit tests are not ideal for testing UIs. UI testing is usually done with other types of tests like integration tests or end-to-end tests.
  Also external dependencies: External systems like databases or web services. These are better suited for integration tests.

- What is Jest? What are some other popular JavaScript unit testing frameworks?
  Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
  It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more! Some other popular JavaScript Testing Frameworks are Mocha, Jasmine, Karma and AVA.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
