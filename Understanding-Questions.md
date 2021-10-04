# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

1) Page initially renders
2) Page waits for input change
3) Onclick, eventhandler runs, running addOne action
4) addOne action within actions folder returns ADD_ONE action case to reducers 
5) ADD_ONE ACTION CASE is returned to App.js which renders it to the user.


* The user presses the 1 button.
* 
...

* TotalDisplay shows the total plus 1.
