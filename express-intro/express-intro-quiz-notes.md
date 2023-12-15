# express-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express useful for?
  Simplifying Server Creation: Express simplifies the process of building a server in Node.js. It provides numerous functionalities that make it easier to handle requests and routes.
  Middleware Integration: Express allows you to use middleware that can process requests before they reach your routes, which is useful for tasks like parsing request bodies, logging requests, and more.
  Routing: It offers a powerful routing system to create web APIs and handle different HTTP methods and URL patterns.
  Template Rendering: Express can render HTML on the server, making it easier to create dynamic web pages based on your data.

- How does Express fit into a full-stack web application?
  In a full-stack application, Express typically handles the server-side logic. It interacts with a database, processes incoming requests, and returns data to the client. The client-side, possibly built with frameworks like React or Vue, then displays this data to the user.

- How do you add `express` to your package dependencies?
  To add Express to your Node.js project, first ensure you have Node.js and npm (Node Package Manager) installed. Then, run the following command in your project directory:
  Copy code
  npm install express
  This command installs Express and adds it to your project's package.json file under dependencies.

- What Express application method starts the server and binds it to a network `port`?
  listen.

- What is a network `port`?
  A network port in the context of a server like Express is a communication endpoint. Each port is associated with a specific process or service and is identified by a number (the port number). For example, web servers typically listen on port 80 for HTTP and port 443 for HTTPS. When you specify a port for your Express server, you're telling it to listen for incoming network requests on that specific port.
  Express is a popular choice for building web applications due to its simplicity and flexibility, and it's often used in conjunction with other technologies to form a complete full-stack solution.

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
