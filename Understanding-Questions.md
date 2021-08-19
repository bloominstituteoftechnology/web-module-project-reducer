# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* the reducers action gets dispatched with (addOne())
* addOne() returns a value type of "ADD_ONE"
* the reducer looks for the type of the action, in this case, "ADD_ONE" or dispatch( {type: ADD_ONE } )
* through the switch we can look for the case of "ADD_ONE" and figure out what to return.
* return({
                ...state,
                total: state.total + 1
            });
* copy the contents of state, and replace any key called "total" with the value of "state.total + 1"
* TotalDisplay shows the total plus 1.