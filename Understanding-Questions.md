# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The handle is called
* A dispatch is called which goes into reduces to check for the type of what is being called
* return a version of our state with pieces that may or may have not been manipulated, in our case, our total is incremented by 1
* states new version is taken into our totaldisplay that takes a value as props which is our totals state (state.total)
...

* TotalDisplay shows the total plus 1.
