# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are functions that let you "hook into" React features like state and lifecycle methods from function components. Some built-in hooks include useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Only call hooks at the top level of a component
  Only call hooks from React functions (not regular JS functions)

- What is the purpose of state in React?
  State allows you to store and update data in a component. It is used for data that changes over time and causes UI updates.

- Why can't we just maintain state in a local variable?
  We can't maintain state in a local variable because local variables don't cause re-renders when they change. State is integrated with React's component rendering lifecycle.

- What two actions happen when you call a `state setter` function?
  1.Updates the component state
  2.Re-render component so the UI matches the new state

- When does the local `state variable` get updated with the new value?
  The local state variable gets updated with the new value after the component re-renders. The state setter function is asynchronous, so the state variable isn’t updated immediately when the setter is called. Instead, React schedules an update and re-renders the component, which is when the state variable reflects the new value.

## Notes
