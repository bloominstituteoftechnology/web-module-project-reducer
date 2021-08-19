# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
not totally sure of my answer, but it feels like inside actions/index.js we made a function and called it addOne, and gave it a type, but i dont remember what the type does.

then inside the reducer/index.js, we have a "switch" that gets the type props from the actions, and then grabs the state we initially set, spreads it, then sets the state.total, to itself, plus 1. 


* TotalDisplay shows the total plus 1.
