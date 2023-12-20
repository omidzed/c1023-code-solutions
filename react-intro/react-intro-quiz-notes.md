# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?

=> [[[React is a JavaScript library for building user interfaces. It's commonly used to construct single-page applications (SPAs)]]]

and allows developers to create reusable UI components. React focuses on the concept of component-based architecture, where each part of the user interface is encapsulated in self-sustaining components that manage their own state and logic.

- What is a React component?

=>[[[A component is essentially a JavaScript class or function that can accept inputs (called "props") and returns a React element]]]

    (usually in the form of JSX, which is a syntax extension for JavaScript that looks similar to HTML). Components can be simple and presentational, or more complex and connected to application logic and state management systems like Redux.

- How do you mount a React app (root component) to the DOM?

=> [[[To mount a React app (root component) to the DOM, you typically use the ReactDOM.render() method.]]]

How it happens in code:

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the root component

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
);

- What are some other popular frontend frameworks?
  Angular, Angular.js, Vue, Next, Svelte, Ember.js

## Notes
