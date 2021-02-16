# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* It then triggers the "handleAddOne" handler onClick
* Which dispatches the "addOne" action
* The action is then injected into the reducer to return the corresponding case
...

* TotalDisplay shows the total plus 1.
