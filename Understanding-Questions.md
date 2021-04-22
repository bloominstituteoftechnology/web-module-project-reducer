# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick event handler fires.
* The handleClick helper function dispatches the action creator called addOne.  
* The addOne action creator returns the type: ADD_ONE, this calls the ADD_ONE case in the reducer.
* The ADD_ONE reducer returns a shallow copy of state, with the total plus 1.
* State is updated in the useReduer hook, and this causes state in the App component to update and rerender.

...

* TotalDisplay shows the total plus 1.
