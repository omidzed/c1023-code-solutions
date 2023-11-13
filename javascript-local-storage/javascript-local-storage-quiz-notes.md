# javascript-local-storage-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you store data in `localStorage`?
To store data in localStorage, you use the setItem method. It takes two arguments: a key and a value. The key is a string that you'll use later to retrieve the stored data, and the value is the data you want to store.

- How do you retrieve data from `localStorage`?
To retrieve data, you use the getItem method with the key you used to store the data. If the data was stored as a stringified object, you'll need to parse it back into an object using JSON.parse.

- What data type can `localStorage` save in the browser?
Strings

- When does the `'beforeunload'` event fire on the `window` object?
The beforeunload event in the window object is fired when the window, the document and its resources are about to be unloaded. This typically occurs when the user is about to navigate away from the page (like closing the tab, refreshing the page, or navigating to another page). It can be used to trigger a warning message asking the user if they are sure they want to leave the page, or to perform cleanup tasks like saving data to localStorage.

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
