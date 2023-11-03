# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
Static

- How does setting `position: relative` on an element affect document flow?
It does not affect the position of any other elements.

- How does setting `position: relative` on an element affect where it appears on the page?
The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left.

- How does setting `position: absolute` on an element affect document flow?
The item is removed from the normal document flow and no space is created for the now removed element within the document flow.

- How does setting `position: absolute` on an element affect where it appears on the page?
The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.

- How do you constrain an absolutely positioned element to a containing block?
By giving the parents position: relative

- What are the four box offset properties?
Top, bottom, right, left


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
