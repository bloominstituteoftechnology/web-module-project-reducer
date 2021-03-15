# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* event object is generated
* onclick anonymous function fires
* dispatch goes to reducer
* reducer looks at case ADD_ONE
* ADD_ONE looks into actions
* TotalDisplay shows the total plus 1.
