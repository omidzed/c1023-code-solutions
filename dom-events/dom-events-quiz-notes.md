# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
Keep track of the code to make sure our code is running as we expect it to, and it also gives us instant feedback which we can use to debug if our code is not performing as it should and there errors that need correcting.

- What is the purpose of events and event handling?
Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. Events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur.

To react to an event, you attach an event handler to it. This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are registering an event handler. Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

- Are all possible parameters required to use a JavaScript method or function?
No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
Event listeners

- What is a callback function?
It is when we pass a function as an argument to another function.

- What object is passed into an event listener callback when the event fires?
EventTarget

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
I would play around with EventTarget in the console and gather information there. Or look up general information on MDN. Also, will keep in mind that there is always the global event object if nothing specific is referenced.
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick) => This one calls handeClick right away.
    ```
    ```js
    element.addEventListener('click', handleClick()) => This one has a callback function as an argument, so it will exexcute some time in the future, when the particular event takes place
    ```


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
