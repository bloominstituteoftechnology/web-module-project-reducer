# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.

* the event handler function runs
* the event handler function dispatches the addOne action creator 
* addOne returns action.type ADD_ONE to reducer
* ADD_ONE case runs inside reducer
* Add_ONE case returns current state and changes state.total to equal state.total + 1



* TotalDisplay shows the total plus 1.
