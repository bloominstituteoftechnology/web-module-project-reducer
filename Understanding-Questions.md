# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* That triggers the onClick function in the CalcButton-1 component
* onClick = () => { } is the function that is triggered.
* The empty { } are then filled  by the prop that is passed.
* Prop= const handleAdd = () => {
    dispatch(addOne())
  }
* So, the onClick in the CalcButton-1 component becomes:
    onClick = () => {dispatch(addOne())}
* That returns the current state and then the state.total + 1
...

* TotalDisplay shows the total plus 1.
