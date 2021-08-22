# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* When the user presses 1, our AddOne action is dispatched.
* When the action is dispatched, our reducer will conditionally recognize it by the case name 'ADD_ONE'
* Once it recognizes it, it will spread and make a new copy of our current state, and then update the total property on state to be the current total plus 1
* Now that our state is updated, the changes are reflected in our UI
...

* TotalDisplay shows the total plus 1.
