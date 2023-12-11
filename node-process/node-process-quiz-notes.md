# node-process-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a computer process?
  A computer process is an instance of a computer program that is being executed. It contains the program code and its current activity. Depending on the operating system, a process might include the executable code, its current activity, the processor's register state, memory allocation, and other resources such as open files and network connections. Each process is isolated by the operating system, and it operates within this confined environment, often with a specific set of resources allocated to it.

- Roughly how many computer processes are running on your computer operating system (Task Manager or Activity Monitor)?
  A few dozen to a few hundred, can be checked using Task Manager on Windows or Activity Monitor on macOS.

- Why should a full stack Web developer know that computer processes exist?
  Resource Management:
  Knowing how processes work helps in understanding how a web application utilizes system resources like CPU and memory. This understanding is crucial for optimizing performance and scalability.
  Concurrency and Parallelism:
  Understanding processes is essential for managing concurrent operations in web applications, especially on the server side. This includes handling multiple requests simultaneously and ensuring that the server can efficiently manage its workload.
  Debugging and Monitoring:
  Knowing about processes aids in debugging and monitoring the web application. Developers can identify which process might be causing issues, such as memory leaks or high CPU usage, and take appropriate action.
  Security:
  Processes operate within certain privileges and security contexts. Understanding this helps in implementing secure web applications, as it's important to ensure that a process does not have more privileges than it needs, reducing the risk of security vulnerabilities.
  Server Management:
  For backend development and server management, knowledge of processes is vital. This includes understanding how web servers like Apache or Nginx handle processes and requests, how databases manage processes, and how server-side scripts are executed.

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
