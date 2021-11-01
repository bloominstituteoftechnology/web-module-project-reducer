# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.
* 0) The user presses the 1 button.
* 1) The click handler function dispatches the action.
* 2) The action converts the data into an acceptable object for the reducer.
* 3) The reducer updates the state.total.
* 4) The app renders with up to date state.
* 5) TotalDisplay shows the total plus 1.
