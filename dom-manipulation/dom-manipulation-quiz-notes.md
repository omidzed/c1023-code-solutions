# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
the class attribute of those elements

- How do you update the CSS class attribute of an element using JavaScript?
setAttribute();

- What is the `textContent` property of element objects?
The textContent property of the Node interface represents the text content of the node and its descendants.

- How do you update the text within an element using JavaScript?
By updating its textContent value, by passing it a new value to replace the former

- Is the `event` parameter of an event listener callback always useful?
Yes. Even though omitting it might not immediately cause issues, it can definitely down the road, as then the system is constantly referring to the global event object, and that could be ANYTHING...!

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
More complicated

- Why is storing information about a program in variables better than only storing it in the DOM?
Because it gives us a reference point and therefore easier access and more control over it.


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
