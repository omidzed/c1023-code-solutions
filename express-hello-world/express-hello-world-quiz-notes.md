# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Express middleware is a set of functions in Express that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions can perform a variety of tasks, modify the request and response objects, end the request-response cycle, or call the next middleware in the stack.

- What is Express middleware useful for?
  Request Logging: Middleware can log details of each request made to the server, which is useful for debugging and monitoring purposes.

Body Parsing: It can parse incoming request bodies, making it easier to extract and use data sent by clients in your routes.

Authentication: Middleware can be used to authenticate users, ensuring that only authenticated users can access certain routes.

Error Handling: Custom middleware can be used to handle errors in a uniform way across your application.

Serving Static Files: Middleware can be used to serve static files like images, CSS files, and JavaScript files.

Custom Processing: You can write your own middleware to perform any specific task that you need to be done for every request or a certain subset of requests.

- How do you mount a middleware with an Express application?
  Middleware functions are added to the Express app using app.use(). They can be applied globally to every request or conditionally based on the route.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  Request Object (req): Represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.

  Response Object (res): Represents the HTTP response that an Express app sends when it gets an HTTP request.

  Next Function (next): A function that, when invoked, executes the middleware succeeding the current middleware. It’s used to pass control to the next middleware function in the application.

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
