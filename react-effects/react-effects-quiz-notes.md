# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  A component is considered "mounted" to the DOM when it has been rendered for the first time and its output is inserted into the DOM. This is the point at which you can interact with the DOM or initiate network requests. In React functional components, this corresponds to the point after the first execution of the component function.

- What is a React Effect?
  A React Effect, commonly referred to using the useEffect hook, is a way to perform side effects in function components. Side effects can be anything that interacts outside the component's scope, such as fetching data, directly interacting with the DOM, setting up subscriptions or timers, etc.

- When should you use an Effect and when should you not use an Effect?
  [Use an effect]:
  To fetch data or communicate with an API.
  To set up subscriptions or listeners.
  For manual DOM manipulations.
  To implement any side effect that isn't directly related to the rendering of UI.
  [Avoid using an effect]:
  For calculations that can be done synchronously in the render method.
  If it leads to performance issues due to unnecessary re-renders or operations.
  To update the state during the rendering phase.

- When do Effects run?
  By default, effects run after every completed render, but you can choose to fire them only when certain values have changed by using the dependencies array.

- What function is used to declare an Effect?
  useEffect();

- What are Effect dependencies and how do you declare them?
  Effect dependencies are the values that the effect depends on, and they determine when the effect should rerun. You declare them in an array as the second argument to useEffect. If the values in this array change between renders, the effect will rerun. If it's an empty array [], the effect runs once after the initial render.

- Why would you want to clean up from an Effect?
  Cleanup is necessary to avoid memory leaks, remove subscriptions, clear timers, or cancel request operations when the component unmounts or before the effect runs again. It ensures that your app is efficient, does not hold onto unnecessary resources, and does not exhibit unexpected behavior.

- How do you clean up from an Effect?
  You clean up from an effect by returning a function from the useEffect call. This returned function is the cleanup function, and React will call it when the component unmounts or before the effect runs again.

- When does the cleanup function run?
  (1) Before the component unmounts, to clean up any side effects from the last effect run.
  (2) Before the effect runs again due to a change in its dependencies, ensuring that the previous effect is cleaned up before executing the new effect.

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
