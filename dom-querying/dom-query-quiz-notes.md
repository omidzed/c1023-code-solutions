# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
We log things to the console to keep track of the code that is running. We typically place logs in the console after important lines of code to verify that a certain event that we were expecting to occur, did in fact occur. We could also have them log to the console a certain value/result that we expected to be returned, to again verify that our code operated as expected. This practice is great for troubleshooting, because if a console.log does not fire as expected we could debug our code right away, instead of having to do at the end of the project where one bug could have created a series of bugs that we would then need to backtrack to find/fix, complicating the entire process.

- What is a "model"?
A "model" in programming is an abstraction that represents the data structure and potentially the logic of the application, often used in the context of frameworks that follow the MVC (Model-View-Controller) pattern.

- Which "document" is being referred to in the phrase Document Object Model?
The "document" in Document Object Model refers to the web page loaded in the browser and represented by the document object in JavaScript.

- What is the word "object" referring to in the phrase Document Object Model?
The "object" in Document Object Model refers to the nodes and elements of the web page which are modeled as objects that can be manipulated with JavaScript.

- What is a DOM Tree?
It's a tree like visual that represents all page content as objects that can be modified.

- Give two examples of `document` methods that retrieve a single element from the DOM.
document.getElementById('id')
document.querySelector('selector')

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
document.querySelectorAll('selector')

- Why might you want to assign the return value of a DOM query to a variable?
You would assign the return value of a DOM query to a variable to manipulate the element or use its properties later in the script.

- What `console` method allows you to inspect the properties of a DOM element object?
The console method console.dir(element) allows you to inspect the properties of a DOM element object.

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
A <script> tag might be placed at the bottom of the HTML content to ensure that the DOM is fully loaded before the script runs, avoiding errors and ensuring elements are accessible.

- What does `document.querySelector()` take as its argument and what does it return?
document.querySelector() takes a CSS selector as its argument and returns the first element within the document that matches this selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
document.querySelectorAll() takes a CSS selector as its argument and returns a NodeList containing all elements within the document that match this selector.


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
