# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
They can determine the value to be assigned to a variable based on a condition,  such as assigning default value.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
It's when an object accessed or function called using an operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
With &&: If the first operand is falsy, JavaScript returns its value without evaluating the second operand.
With ||: If the first operand is truthy, JavaScript returns its value without evaluating the second operand.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
Difference from ||: It's similar to ||, but it only checks for null or undefined, not any falsy value. For example, 0 or '' (empty string) are considered valid values by ??, but not by ||.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
Difference from if/else: It's a compact version of if/else used for assigning a value based on a condition. It's a single line expression, not a statement block like if/else.
- What is the `?.` (optional chaining) operator? When would you use it?
Usage: It's used to access properties of an object without causing an error if the object is null or undefined. For instance, obj?.prop returns undefined if obj is null or undefined, instead of throwing an error.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
Usage with Arrays and Objects:
Arrays: It 'spreads' out the elements of an array. For example, [...array1, ...array2] combines the elements of array1 and array2.
Objects: It's used to copy or merge object properties. Like {...obj1, ...obj2} combines properties of obj1 and obj2.
- What data types can be spread into an array? Into an object?
Into an Array: You can spread elements of another array, a string (as individual characters), or an iterable object.
Into an Object: You can spread properties of another object.
- How does spread syntax differ from rest syntax?
Difference from Rest Syntax: While spread syntax 'expands' elements, rest syntax does the opposite - it 'gathers' multiple elements into a single array. Rest syntax is used in function parameters like function(...args) to capture all incoming arguments as an array.



## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```js
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
