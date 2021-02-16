# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* onClick listener calls onClick handler.
* onClick handler calls a nifty console log for sanity's sake.
* handler then calls addOne, which creates an object indicating the action to be conducted.
* Reducer receives the type object with state, runs the action, updates state via re-render.
* TotalDisplay receives the updated data and renders accordingly - by showing an addition of one.

* TotalDisplay shows the total plus 1.
