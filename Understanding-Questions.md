# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
First - we click

Second - we are invoking the function that will give the action the data it needs

Third - We are going into the reducer, seeing if the action.type === the function we invoked in step 2, then running the behind whichever case is true.  In this case, truthiness would be to add 1 to the total(which is the a slice of state).  

* TotalDisplay shows the total plus 1.
