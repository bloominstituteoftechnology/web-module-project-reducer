# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* onClick CalcButton checks value
* value in addOne handle
* addOne actions rings ADD_One reducer
* reducer returns total +1, then displayed:
* TotalDisplay shows the total plus 1.
