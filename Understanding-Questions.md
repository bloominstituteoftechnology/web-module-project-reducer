# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...The onClick handler picks up the 'click' event and evokes the callback function I created, which executes the dispatch function. Within the dispatch function I passed through the corresponding key of the actions object. It finds the object from where I imported it from the actions index to decide which method to run for the given function. 

* TotalDisplay shows the total plus 1.
