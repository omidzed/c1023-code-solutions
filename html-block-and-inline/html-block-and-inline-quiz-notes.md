# html-block-and-inline-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do block-level elements affect the document flow?
They take one block, and are considered do to be of 'display: block' type by CSS, and therefore are rendered one after another, displaye vertically. So each block takes up the entire width of the screen regardless of how big/small the content being displayed is.

- How do inline elements affect the document flow?
Inline elements can share a block with other inline elements, so they can be stacked next to one anther horizontally.

- What are the default width and height of a block-level element?
Width: By default, a block-level element takes up the full width available to it within its parent element, stretching out to the edge of its container. This means the width is typically 100% of its containing block, minus any margins, borders, or padding that are applied.

Height: The default height of a block-level element is determined by the height of the content inside it. It only grows in height to accommodate its content unless a height is explicitly set with CSS.

- What are the default width and height of an inline element?
Inline elements do not have a default width and height and are typically going to have the same width and height of whatever content is inside of them, unless other css rules affect them on the page.

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
