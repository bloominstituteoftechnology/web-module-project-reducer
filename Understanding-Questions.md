# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.

the onclick handler invokes dispatch, that then calls addOne
the reducer then makes addOnce copy the current state and add 1 to it, returning the current state + 1

* TotalDisplay shows the total plus 1.
