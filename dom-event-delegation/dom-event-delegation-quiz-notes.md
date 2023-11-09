# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
An element that we could add an eventListener to that is waiting for certain events to occur in the DOM, which then will trigger the target element to perform some function.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
Because of the concept of event bubbling, where if an eventListener is added to a child element of some element, and once the event occurs, the parent element get takes notice and event bubbling 'bubbles up' that event up to them.

- What DOM element property tells you what type of element it is?

- What does the `element.closest()` method take as its argument and what does it return?
The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.

- How can you remove an element from the DOM?
Element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
Append the element to the last child element, this way the event bubbling principle will  add en evnentListener to each child element as it traverses up the DOM tree to the highest level parent element, and this way we do not have to do this manually

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
