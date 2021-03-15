# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.

onClick is triggered

dispatcher is called with action creator arg addOne

reducer executes with param of "ADD_ONE" as action type

state is updated and rerendered

- TotalDisplay shows the total plus 1.
