# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.

- The user presses the 1 button.
- The onClick event handler fires.
- dispatch calls the function addOne which returns a special object with the property of {type: ADD_ONE}.
- Magically, JS takes the special object and plugs it into the reducer function with state initialized in App.js.
- The switch will run, and if the case is equal to the type called from the dispatch.
- The function will run and state will be copied and returned with the updated state.
- The application will re-render on the change of state.
- TotalDisplay shows the total plus 1.