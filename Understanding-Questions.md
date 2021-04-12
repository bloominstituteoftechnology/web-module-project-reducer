# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The change of state triggers the action creator to create an action object.
* The state and action  object are then dispatched and put into the reducer.
* The reducer processes the actions and a new state is created.
* The new state is dispatched and the component.
* TotalDisplay shows the total plus 1 when the component rerenders.
