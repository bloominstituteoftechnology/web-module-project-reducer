# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- the onClick method triggers the event handler
- the event handler dispatches the addOne action
- the addone action spreads the current state and updates the state total to the current total plus 1
  ...

- TotalDisplay shows the total plus 1.
