# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
  The static middleware in Express is designed to serve static files such as images, CSS files, and JavaScript files. This is essential for any web application that needs to deliver these files to clients without processing them on the server side.

- What does `express.static()` return?
  a middleware function configured to serve static files from a specified directory.

- What are several examples of static files?
  Images: .jpg, .png, .gif, etc.
  CSS files: for styling web pages.
  JavaScript files: for client-side scripts.
  HTML files: although these can also be served dynamically.

- What is a good way to serve application images using Express?
  Organize Your Images: Store all your images in a specific folder, like public/images.
  Use express.static Middleware: In your Express application, use the express.static middleware to serve the static files.
  For example:

  app.use('/images', express.static('public/images'));

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
