# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- triggers the onClick function that calls the dispatch function
- dispatch function, is a useReducer hook that gives access to initalState, and then updates state based on the case
- state is returned to the JSX Component and
- TotalDisplay shows the total plus 1.
