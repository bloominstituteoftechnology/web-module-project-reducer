# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
After clikcing the 1 button, addOne is dispatched from the onClick and a retur nvalue of ADD_ONE is returned to dispatched. That string is then taken to the reducer function where the action(dispatch value) is used to determine which case to take. and the case will make it's necessary change to the state and will be displayed to the TotalDisplay.
* TotalDisplay shows the total plus 1.
