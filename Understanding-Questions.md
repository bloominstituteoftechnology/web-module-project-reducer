# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...

//this was my answer before creating another custom action....
not totally sure of my answer, but it feels like inside actions/index.js we made a function and called it addOne, and gave it a type, but i dont remember what the type does.
then inside the reducer/index.js, we have a "switch" that gets the type props from the actions, and then grabs the state we initially set, spreads it, then sets the state.total, to itself, plus 1. 

//answer after creating a custom action...
okay, so now I see that making an action is setting a type, then we drill that type inside the reducer file and we assign what it will actually do inside the reducer file, which makes little sense, since the 'action' file is called action, you would think the 'action' of what the thing does would go there, but whatever. okay, so now that we have the 'type' prop from action, and passed it through the reducer to tell it what to do and how to manipulate the original state, we bring that state into the app component and then we use that information in an event handler function. still dont know how to explain that, but im getting it. 

* TotalDisplay shows the total plus 1.
