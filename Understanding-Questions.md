# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* onClick fires change handler
* change handler calls dispatch such as dispatch(addOne())
* which in turn Calls the reducer/index.js which has access to creators/index.js
* the associated reducer case ADD_ONE reproduces state and changes the state such as total to +1 (Gets modified state) useing action creater
* rerenders the component modified state passed in. 
* TotalDisplay shows the total plus 1.
