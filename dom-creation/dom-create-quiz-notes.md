# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
Not by itself, it needs to use appendChild() for that to happen

- How do you add an element as a child to another element?
element.appendChild();

- What do you pass as the arguments to the `element.setAttribute()` method?
2 strings in single quotes, first attribute name, second the attribute value. For example:
element.setAttribute('class', 'example');

- What steps do you need to take in order to insert a new element into the page?
query for where you want to element to be added to, create the element, then append the newly created element to what you had queried for

- What is the `textContent` property of an element object for?
To access and/or edit objects that are visible to the user and will be viewed in text or 'string' form.

- Name two ways to set the `class` attribute of a DOM element.
element.setAttribute('class', 'some-class')    or    element.className = 'some-class';

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
That function will make it easy to reuse that code, and make creating new DOM elements in the same manner much faster in the future for anyone accessing and using the project.
Abstraction, Maintainability, Testability


## Notes

The following 2 questions made me think of more questions to research and learn.
- What is the `textContent` property of an element object for?
This made me think of the 'innerText' property vs 'textContent' and how it would or would not be able to be used as a substitute here.

- Name two ways to set the `class` attribute of a DOM element.
element.setAttribute('class', 'some-class');  => this way is very straightforward, and can be used to any attribute
but what about this other way? =>    element.className = 'some-class';


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
