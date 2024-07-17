# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick triggers the oneClickHandler function.
* The addOne from 'actions/index' is triggered and tells that the 'type' is ADD_ONE.
* The reducer from 'reducers/index' is triggered and tells the switch operation that since the type is ADD_ONE, it should return ({ ...state, total: state.total + 1 }) (basically to increase the total by 1).
* TotalDisplay shows the result.
