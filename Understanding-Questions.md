# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* CalcButton handles click and dispatches addOne reducer.
* addOne reducer copies previous state.
* addOne reducer gets current state total and adds 1 to it.
* TotalDisplay renders the total plus 1.
