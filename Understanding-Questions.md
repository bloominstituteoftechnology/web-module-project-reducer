# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
1.  The user presses the 1 button.
2. - handleAddOneCLick is fired
3. - dispatch sends addOne() to the reducer as the return type: ADD_ONE
4. - The reducer takes in ADD_ONE as the action and current state and reduces them to old state + change (+1). 
5. - rerender produces the new view of updated state to the total dispaly. 
...

* TotalDisplay shows the total plus 1.
