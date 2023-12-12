# node-process-argv-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
  In Node.js, the process object is a global object that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require(). The process object is an instance of EventEmitter and provides various properties and methods to interact with the running Node.js process.

- How do you access the `process` object in a Node.js program?
  Since process is a global object in Node.js, it can be accessed in any module without requiring it. You can directly use process and its methods and properties in your Node.js code. For example, you can write console.log(process.version) to log the Node.js version.

- What are environment variables and how do you access them?
  Environment variables are external variables that are set outside of the Node.js application, typically at the operating system level. They are used to pass configuration information to Node.js applications. This can include sensitive data like API keys, database passwords, and other configuration settings that should not be hard-coded in the application.
  In Node.js, environment variables can be accessed using process.env. This is an object containing the user environment. For example, process.env.PATH returns the PATH environment variable, and process.env.YOUR_CUSTOM_VARIABLE would return the value of YOUR_CUSTOM_VARIABLE.

- What is the data type of `process.argv` in Node.js?
  Array of string.
  Contains all the command line arguments provided when the Node.js process was launched.

- How do you access the command line arguments in a Node.js program?
  Using process.argv. Since it's an array, you can use standard array methods to work with it.

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
