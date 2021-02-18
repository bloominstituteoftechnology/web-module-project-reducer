# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* click handler is fired, jumps to function definition where dispatch has wrapped
the action creator. action creator is called and returns action object and dispatch sends the action object to reducer where state is updated by increasing total by 1.
...

* TotalDisplay shows the total plus 1.
