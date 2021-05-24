# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- Once User presses one an eventHandler function you've created triggers.
- Then from your useReducer state you've created it will read your dispatch coming from reducers(index.js)
- It will read the string type of ADD_ONE.
- It then reads the ADD_ONE by returning the original state then setting the total to add 1
- After that the payload is set to one and after it will just keep adding one because the memory keeps whatever number that was there and just adds 1
  ...

- TotalDisplay shows the total plus 1.
