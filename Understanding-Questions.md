# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.

* the onClick is invoked and the anonimous function runs the function dispatch(that in turn finds a callback addOne(that needs a value that we say is 1))

*it finds addOne in ./actions/index.js where it needs to find what type:ADD_ONE is 

*it goes to  '../reducers/index.js' to find the case of ADD_ONE and sees that it updates state by spreading in  the old value of state, and saying htat the value of total: is state.total incramented by one

*state.total is back on App.js where the totalDisplay value is not updated to be {the old state + 1} 

* TotalDisplay shows the total plus 1. WIN!
