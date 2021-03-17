# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
the dispatcher runs the 'addOne()' function, which returns an object
the object is passed into the reducer, which parses the object and alters state based on the action given
state is updated, dom is re-rendered

* TotalDisplay shows the total plus 1.
