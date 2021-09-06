# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- Onclick handleAddOne is fired
- Dispatch is fired inside of the handleAddOne function, taking in the addOne function as an argument
- AddOne function returns the type "ADD_ONE", referencing the case in the reducer
- ADD_ONE case returns spread state and sets total to state.total + 1
- TotalDisplay shows the total plus 1.
