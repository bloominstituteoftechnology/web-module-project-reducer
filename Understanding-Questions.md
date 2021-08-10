# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* onClick initiates handleClick function, which dispatches our action, the addOne function, to our reducer function.
* Using switch, we can locate our matching action within our reducer function, allowing us to spread our state, and set our total to current state + 1.
* State is returned to App.js, leading to our new state.total value being updated.
...

* TotalDisplay shows the total plus 1.
