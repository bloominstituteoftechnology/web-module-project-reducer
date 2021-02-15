# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The 1 button has an onclick event handler that triggers the dispatch function
* The dispatch function triggered receives the action addOne() as an argument
* The action addOne() resolves to the object `{type:ADD_ONE}`
* The dispatch function passes that object as the action argument into the reducer
* It also passes the current state into the reducer
* The reducer receives the state (current state) and the action (`{type:ADD_ONE}`)
* The switch statement in the reducer evaluates action.type
* It selects the appropriate case based on type === "ADD_ONE"
* That case makes a copy of current state and changes state.total by adding 1 to it
* It returns the new copy of state with state.total updated as +1
* The dispatch function assigns that returned value as the new state
* The app re-renders based on the updated state
...

* TotalDisplay shows the total plus 1.
