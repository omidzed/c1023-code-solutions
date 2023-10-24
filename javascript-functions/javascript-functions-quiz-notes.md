# javascript-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a function in JavaScript?
Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

- Describe the parts of a function **definition**.
function fnName (parameters) {
  //set of instructions, also known as a code block
};

so above we have the 'function' keyword, followed by the name we have given the function, followed by parameters inside paranthesis, followed by the code block. Parameters are data we can pass/use within the function's code block, which will use the parameters to perform the task(s).

- Describe the parts of a function **call**.
fnName (argument);
so using the previous example, we write the name of the function followed by paranthesis. That would be calling the function. The argument part is optional and it goes insikde the paranthesis.

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?
In a call we drop the 'function' keyword, and its code block.

- What is the difference between a **parameter** and an **argument**?
'Parameter' refers to the generic terminology for the 'data being used' in the function, whereas 'argument' refers to an actual peice of data that is actually being used by the developer or user.
So function getAge(age){return age;} has a parameter called 'age' whereas getAge(36); has an argument of '36.'

- Why are function **parameters** useful?
They can be used somewhat like a blueprint for someone else reading the code to know what data types are acceptable in this particular function.

- What two effects does a `return` statement have on the behavior of a function?
It gives us some data that we can use outside of the funcction's body, and if it runs, then no more code from that function's  body will be ran, as it will exit the function and return something, signaling the end of that particular instance of the function being called. 


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
