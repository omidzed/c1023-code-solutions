# react-design-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the phases in the React design process?
  Phase 1 - Identify Components
  Phase 2 - Identify State
  Phase 3 - Identify Events (Actions)

- How does data flow in React?
  ===> Unidirectionally, Parent to Children

  => From Parent to Child (Props): Data is passed down the component tree via props. Components receive props from their parent and can use this data to render UI or pass it to their children.
  => State Management: Each component can maintain its own state, which it can then pass down to its children as props. When state changes, the component re-renders, along with its children.
  => Lifting State Up: When multiple components need to reflect the same changing data, the state is lifted to their closest common ancestor. That ancestor then passes the state back down as props.

- How can children components modify state in their parents?

=> Callback Functions: The parent component passes a function to the child as a prop. This function is designed to update the parent's state.
=> Invoking Callbacks: When some event or action occurs in the child component, it calls the passed function with new values or updates.
=> Updating Parent State: The callback function, defined in the parent, updates the parent's state. Since the state has changed, the parent re-renders as needed, along with all children receiving the updated state or functions.

This process ensures that the state remains the "single source of truth" and that data flows down from the parent to child, keeping the unidirectional flow intact. This method is also a fundamental concept for managing local component states in larger, more complex applications.

## Notes
