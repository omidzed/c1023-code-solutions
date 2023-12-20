# react-jsx-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSX?
  +> [[[HTML-like Syntax in JavaScript: JSX allows you to write HTML structures in the same file as your JavaScript code.]]]
  This makes it easier to visualize and create the UI components.

- How does React use JSX to render components?

Describing UI Components: In React, JSX is used to describe how a component should render. Each JSX element translates to a React element, which is a lightweight representation of a DOM element.

Declarative Approach: React uses a declarative approach, meaning you describe what you want to achieve (the UI) and React takes care of updating the DOM. JSX fits perfectly into this by allowing you to describe your UI in a declarative syntax.

Embedded JavaScript Expressions: JSX can contain JavaScript expressions. These expressions are written inside curly braces {} and can include variables, functions, or any JavaScript code, making your UI dynamic.

Components and Props: React components (both functional and class-based) can be rendered using JSX. Components can accept props, which are passed in a similar way to HTML attributes in JSX. For example, <MyComponent propName={value} /> passes value to MyComponent as a prop named propName.

## Notes

Expressive and Readable: JSX makes your component's structure more readable and expressive. It's much easier to see the layout of components, just like you would with HTML.

Transpiles to JavaScript: Despite looking like HTML, JSX is not directly understood by web browsers. It is transpiled to regular JavaScript by preprocessors like Babel. For example, a JSX element like <div>Hello World</div> gets converted into JavaScript code: React.createElement('div', null, 'Hello World').
