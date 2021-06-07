# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick event handler is invoked.
* The invocation of onClick triggers the handleAddOne function (as defined in App.js)
* The dispatch function is invoked and is passed the value `{type:ADD_ONE}` as defined in actions
* The dispatch function changes state according to the pattern described in reducers (changing state.value to state.value + 1)
* The App component is re-rendered with the new and improved state
* TotalDisplay shows the total plus 1.
