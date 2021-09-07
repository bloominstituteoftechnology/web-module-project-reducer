# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.

- The user presses the 1 button.
- The event handler called onClick fires
- onClick calls dispatch, which calls on addOne from our action index.js
- The type is now defined from our addOne function, which gets passed to reducer
- reducer runs through the switch with the current state and the action which was passed in from dispatch and addOne.
- reducer executes the case of ADD_ONE
  ...

- TotalDisplay shows the total plus 1.
