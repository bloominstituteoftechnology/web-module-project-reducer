# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick method on the 1 button utilizes the dispatch callback along with setting the type via the addOne function
* dispatch goes through the switch in reducers/index.js and carries out the function that matches the type set by addOne
* The reducer function adds 1 to state.total
* TotalDisplay shows the total plus 1.
