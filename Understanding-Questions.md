# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- It goes to the event handdler
- dispatch passes the action to the reducer
- reducer then dose the action and update total
- total gets passed to TotalDisplay
- TotalDisplay shows the total plus 1.
