# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* the onClick calls the handleClick function that receives an event
* the handleClick function calls dispatch, which takes an action as a parameter (the action passed in is the addOne function)
* addOne is called and receives the clicked button's value (1) as a parameter and returns an object with a type key that has a value of ADD_ONE
* dispatch has access to the current state because it's in the same scope as useReducer()...so it has access to the reducer function that was passed into useReducer()
* the reducer function takes the ADD_ONE action and the current state to run a switch
* the case(ADD_ONE) returns the state object, but adds 1 to state.total, which is then rendered in the calculator because the state was updated, so the component rerenders
...

* TotalDisplay shows the total plus 1.
