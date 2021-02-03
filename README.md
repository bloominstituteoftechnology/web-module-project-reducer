# The Reducer Pattern Challenge | Sprint 2 | Module 1 

This module explored the reducer pattern. During the module, you studied what immutability is, what reducers, actions and dispatch are, and how to use the reducer hook. In this project, you will practice each of the steps of building state and actions into an application. We will do this by both adding in and building from scratch all of the pieces of the reducer pattern.

### Objectives
- Understand how to use useReducer hook.
- Get comfortable connecting a reducer state to an application's UI.
- Understand how to create actions cases and action creators.
- Successfully connect UI user events to the triggering of reducer actions.
- Learn how to step through and test thoroughly each step of the process.

### Commits
Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.


### Introduction
In this project, you will build an complete a simple calculator app that can add, multiply, subtract and clear numbers in any order as well as add in memory save and recall features. You will start by adding in missing pieces to the code and complete the process by building features in to the UI, reducer and actions files from scratch.

This simplified calculator adds the entire number selected, rather then adds digits into end of number. In the end of the process, your calculator should function as follows:

![Calculator Example](project-goals.gif)

***Make sure to complete your tasks one at a time and completely test each task before proceding forward.***

### Introduction
#### Task 1: Project Set Up
- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] CD into the project base directory `cd web-module-project-s2m1-the-reducer-pattern`
- [ ] Download project dependencies by running `npm install`
- [ ] Start up the app using `npm start`

#### Task 2: Connect the reducer and intitialState to the component.
- [ ] Take a tour of application, in particular the `App.js`, `/reducer/index.js`, and `/action/index.js` files.
- [ ] Within App.js, import the useReducer hook, our application's reducer and our application's initialState.
- [ ] Use useReducer hook to get access to the application state and dispatch.

#### Task 3: Connect the state to our App.js DOM.
- [ ] Replace "X" with a reference to `state.operation` within the operation element.
- [ ] Replace "0" with a reference to `state.memory` within the memory element.
- [ ] Replace "0" with a reference to `state.total` when passing a value to our AnswerDisplay component.
- [ ] Check to see that your total, operation and memory display in the UI match your initialState (100, / and 100 respectively)
- [ ] Test you are connected to state by changing the initialState value in your reducer to:
```
export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}
```
- [ ] Check to see that your display correctly reflects the change to your state.

#### Task 4: Connect a premade action to the one button in our UI.
- [ ] Note the `ADD_ONE` action case (in ./reducer/index.js) and `addOne` action creator (in ./actions/index.js). This action adds 1 to our total.
- [ ] Import the `addOne` action creator into App.js.
- [ ] Within App.js, create an event handler connected to the 1 button's onClick method.
- [ ] Within your event handler, dispatch the addOne.
- [ ] Test that your event is correctly connected by pushing the 1 button in the browser. Your total should increase by 1.


#### Task 5: Connect a premade action to all number buttons in our UI
***Adding indivisual actions for every number would be tedious. Let's add in an action that can work for all numerical input***
- [ ] Note the `APPLY_NUMBER` action case (in ./reducer/index.js) and `applyNumber` action creator (in ./actions/index.js). This action adds, multiplies or subtracts a number passed into the action creator.
- [ ] Import the `applyNumber` action creator into `App.js.`
- [ ] Remove or comment out the `addOne` event handler from the 1 button.
- [ ] Create an eventhandler that takes in a number as an argument and dispatchs `applyNumber` with it.
- [ ] Attach that eventhandler to the 1 button's `onClick` method, passing in a 1 as an argument. (Remember that we pass a function into that click handler, not the execution of a function)
- [ ] Test that clicking the one button still adds one to the total display on the browser.
- [ ] Connect all other number buttons to your new event handler, passing in their respective values.
- [ ] Test that clicking on each button will add it's respective value to the total display.

#### Task 6: Create and connect an action creator for changing operations.
***Right now our application only adds. Let's change that and give you practice creating and connecting action creators of your own!***
- [ ] Note the `CHANGE_OPERATION` action case (in ./reducer/index.js). This reducer case takes in a operator value (+, * or -) and assigns it to state.
- [ ] Create an action creator (in ./actions/index.js) that takes in an opperator as an argument and creates an action object with the type `CHANGE_OPERATION.`
- [ ] Import in your new action creator into `App.js.`
- [ ] Create and attach event handlers to the `+`, `-` and `*` buttons that dispatch your new action creator. Make sure you pass in the approprate operator string in each case.
- [ ] Test that you can successfully change operators and apply numbers in each case.

#### Task 7: Create and connect an reducer case and action creator for clearing the display.
***Right now our application only adds. Let's change that and give you practice creating and connecting action creators of your own!***
- [ ] Within `./reducers/index,` add in a case for CLEAR_DISPLAY. Clear display should set the total value in state to 0.
- [ ] Within `./actions/index,` add in an action creator and action string constant to for CLEAR_DISPLAY. Make sure to import that constant into your reducer file.
- [ ] Within `App.js,` import in your clearDisplay action creator.
- [ ] Create and connect an event handler to the "CE" button that dispatches your clearDisplay action creator.
- [ ] Test that your clearDisplay button works as expected.

#### Task 8: Add in memory functions from scratch!
***Congradulations! You have gone through the entire process for adding an action to your app! Now, see if you can follow the same process (reducer case => action creator => UI connection) for the following button functions.***

***IN EACH CASE, ALWAYS TEST YOU FEATURE WORKS BEFORE PROCEEDING FORWARD.***

- [ ] When `M+` is pressed, the total value in state should be placed inside of the memory value in state. Test by seeing the result of memory in the UI.

- [ ] When `MF` is pressed, the total value in state should be applied to the memory value in state using the current operator. Test by adding a value to memory and then seeing if the total updates correctly when pressed.

- [ ] When `MC` is pressed, the memory value is set to zero. Test by adding a value to memory and then seeing the memory value reset to zero when pressed.


### Stretch goals