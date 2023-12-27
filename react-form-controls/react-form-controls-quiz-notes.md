# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?

- What are some advantages of using uncontrolled components?
  Uncontrolled components, on the other hand, use refs to get form values from the DOM instead of controlling them via state.

How They Work: Instead of writing an event handler for every state update, you use a ref to retrieve values from the DOM.
Advantages:
=> Less Code: Generally require less code than controlled components and can be easier to integrate with non-React code.
=> Performance: Can be less demanding on performance because they don't require a re-render every time the input changes.
=> Familiarity for HTML Veterans: More similar to traditional HTML input handling.
Typical Approach: Usually, you would use the ref prop to access the DOM node directly.

- What are some advantages of using controlled components?
  In controlled components, form data is handled by the React component's state. The input form elements like <input>, <textarea>, and <select> thus have their values controlled by React. Here's how they differ and the advantages of each:

How They Work: The input values are controlled by React state, and every state mutation will have an associated handler function.
Advantages:
=> Direct Control: You have direct control over the form's values and changes since they are tied to the React component's state.
=> Consistency: They are more consistent with the React way of handling state and updates, leading to more predictable code.
=> Validation: Easier to validate user input on the fly.
Submitting Data: Since the form values are stored in the component's state, it is straightforward to submit data.
=> Props for Controlled Components: To make an input controlled, you would typically manage its value prop and provide an onChange handler to update the state accordingly.

- Which style do you prefer?

- What two props must you pass to an input for it to be "controlled"?
  => value: A prop that reflects the value of the input element and is tied to the component's state.
  => onChange: A handler that updates the state based on user input, thus re-rendering the component with the new value.

- What are some popular npm packages for creating forms in React?
  => Formik: Widely used for building forms in React. It handles form state, validation, and submission.
  => React Hook Form: Utilizes React hooks to manage forms with minimal re-renders.
  => Redux Form: Useful for those already using Redux, it keeps the form state in a Redux store.

## Notes
