# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
Event.target is the element the event is being fired on

- What is the affect of setting an element to `display: none`?
It hides the element form being rendered

- What does the `element.matches()` method take as an argument and what does it return?
selectors, returns boolean

- How can you retrieve the value of an element's attribute?
Element: getAttribute() method

- At what steps of the solution would it be helpful to log things to the console?
Every step

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
I would need to add an eventListener to every element bubbling up to the parents element instead of just adding it to the parent and letting event delegation take care of the rest.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
A very large number of conditional statements, like if/else/if/else if/else/if/else if/else/if/else...

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
