# Understanding Questions:
What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
1.  The user presses the 1 button.
2. - handleAddOneCLick is fired
3. - dispatch calls addOne() calls the reducer() (sends the return type: ADD_ONE to the reducer as the action case)
4. - The reducer takes in ADD_ONE as the action and current state (via dispatch) and reduces them to old state + change (+1).
5. - dispatch rerenders the new view of updated (modified) state to the total dispaly. 
