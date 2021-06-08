# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- onClick triggers the handleAddChanges function
  handleAddChanges used the AddOne function
  AddOne returns a new state which is one higher than the previous one

...
When the state is returned as +1, the total display updates

- TotalDisplay shows the total plus 1.
