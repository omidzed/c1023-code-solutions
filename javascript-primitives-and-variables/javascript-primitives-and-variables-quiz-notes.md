# javascript-primitives-and-variables-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of variables?
Storing data, readability, flexibility, reusability

- How do you **declare** a variable?
By using a variable keyword, var/const/let, followed by a name of your choosing that applies to what you will use it for. For example:
const array1 = [];

- How do you initialize (**assign a value to**) a variable?
You initialize by using '=' followed by some placeholder value or value you are ready to use.
const obj = {};

- What characters are allowed in variable names?
Letters, digits, or the symbols $ and _

- What does it mean to say that variable names are "case sensitive"?
It means that the system will interpret 'a' and 'A' differently, so 'Apple' and 'apple' are not the same thing.

- What is the purpose of a string?
Strings hold text values.

- What is the purpose of a number?
Numbers hold numerical values.

- What is the purpose of a boolean?
A boolean holds either true or false as its value.

- What does the `=` operator mean in JavaScript?
It is the assignment operator.

- How do you update the value of a variable?
You update the value of a variable by using '=' operator. Like:
let number = 2;
You update number's value like this:
number = 5;
So number's value is no longer 2, it is 5.

- What is the difference between `null` and `undefined`?
You would typically see a varibale being called 'undefined' if you completely forgot to define the varibale or in one of these ways:
 A variable that is declared but not initialized will automatically be assigned the value undefined.
 Functions that do not return anything will, by default, return undefined.
 Accessing a property that doesn't exist on an object returns undefined.

 'Null' is typically intentional, it could be a placeholder value, until you need to assign it a value, or when used to reset a variable.

- Why is it a good habit to include "labels" when you log values to the browser console?
Because it will clearly show and remind you of which console.log() you are referring to. It is good practice because in most projects there will be many console.log's and it can quickly become confusing which message you are looking at in the console.

- Give five examples of JavaScript primitives.
Strings, numbers, objects, arrays, booleans. 

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
