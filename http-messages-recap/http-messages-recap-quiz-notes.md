# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  A client in the context of web development is usually the user's device running a web browser or another application that requests data from a server. Think of it like someone (the client) asking for a service or product.

- What is a server?

A server is a computer or system that provides data or services to clients. In web development, it's where websites and web applications live. It's like a shop or service provider that responds to the client's requests.

- Which HTTP method does a browser issue to a web server when you visit a URL?

When you visit a URL, the browser typically issues a GET request. This request tells the server, "Hey, I want to see the webpage or data associated with this URL."

- What is on the first line of an HTTP **request** message?

The first line of an HTTP request message contains three parts: the HTTP method (like GET or POST), the request target (like the path to a webpage), and the HTTP version (like HTTP/1.1). It looks something like: GET /path/to/resource HTTP/1.1.

- What is on the first line of an HTTP **response** message?

The first line of an HTTP response message includes the HTTP version, a status code, and a status message. For example: HTTP/1.1 200 OK. This tells the client the HTTP version the server is using, the status of the request (200 means success), and a brief message about that status.

- What are HTTP headers?
  HTTP headers are key-value pairs in both HTTP request and response messages that provide additional information about the request or response. They can include things like what type of web browser is being used, the format of the requested data, server type, and more.

- Is a body required for a valid HTTP message?

No, a body is not required for a valid HTTP message. HTTP requests and responses can have a body, but it's not mandatory. For instance, a GET request usually doesn't have a body, while a POST request typically does, as it's sending data to the server.
What is on the first line of an HTTP response message?

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
