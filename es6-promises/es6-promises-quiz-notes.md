# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?

Event Queue Model of Promises
Concept: Promises in JavaScript are part of the asynchronous programming model. They allow you to write code that waits for an operation to complete without blocking the rest of your code.

Event Queue: JavaScript has an event loop that checks the queue of pending events (like user interactions, timers, or asynchronous operations like Promises). When a Promise is resolved or rejected, its completion is an event that gets queued. The event loop picks up these events and processes the associated callbacks, ensuring non-blocking execution.

- What are the three states a Promise can be in?

Pending: The initial state. The operation hasn't completed yet.
Fulfilled: The operation completed successfully. This state is reached when the resolve function is called.
Rejected: The operation failed. This state is reached when the reject function is called.

- How do you handle the fulfillment of a Promise?

Use .then() method. It takes a callback function that runs when the Promise is fulfilled.
myPromise.then((result) => {
console.log(result); // handle the successful result
});

- How do you handle the rejection of a Promise?

Use .catch() method. It takes a callback function that runs when the Promise is rejected.

javascript
Copy code
myPromise.catch((error) => {
console.error(error); // handle the error
});
Alternatively, you can handle both fulfillment and rejection in a single .then() call by providing two functions:

javascript
Copy code
myPromise.then(
(result) => { /_ handle success _/ },
(error) => { /_ handle error _/ }
);

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
