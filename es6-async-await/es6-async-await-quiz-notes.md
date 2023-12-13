# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  async is used to declare a function as asynchronous. This means the function can perform asynchronous operations like fetching data from a server or reading files without blocking the rest of the code from running.
  await is used inside an async function to wait for a Promise to resolve. It makes your asynchronous code look and behave a bit more like synchronous code.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Promise.then and Promise.catch are methods used for handling the fulfillment and rejection of Promises, respectively. They are part of the older way of handling asynchronous operations.
  async/await is a newer syntax that makes your asynchronous code look synchronous and is generally considered easier to read and write. It's syntactic sugar over Promises, making the code more linear and less nested compared to .then and .catch.

- When do you use `async`?
  You use async when you are declaring a function that will perform asynchronous operations and you want to use await within it.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await when you want to wait for a Promise to resolve before moving to the next line of code in your async function.
  You don't use await with synchronous functions or operations because they don’t return a Promise and there's nothing to wait for. If you await a synchronous function, JavaScript will still wrap the returned result in a resolved Promise, so it won't cause an error, but it's unnecessary.

- How do you handle errors with `await`?
  Errors in await are handled using try...catch blocks. You wrap the await statement in a try block, and if an error occurs, it is caught in the catch block.

- What do `try`, `catch` and `throw` do? When do you use them?
  try is used to wrap code that might throw an error.
  catch is used to handle the error if one is thrown in the try block.
  throw is used to throw an error manually.
  You use them when you have code that might fail and you want to handle the failure gracefully.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If you forget to use await on a Promise, the code will not wait for the Promise to resolve and will move on to the next line. This might lead to unexpected behavior if the following code depends on the resolved value of the Promise.
  If the Promise is rejected and you haven't used await or .then and .catch, the rejection might go unhandled, leading to potential bugs and uncaught exceptions in your application.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I prefer async/await for its simplicity and readability. It allows writing asynchronous code that's easier to read and maintain, resembling synchronous code's structure. This reduces the cognitive load, especially when dealing with complex code.

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
