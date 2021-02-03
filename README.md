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

This simplified calculator adds the entire number selected, rather then adds digits into end of number. In the end of the process, your calculator should function as follows.

![Calculator Example](project-goals.gif)

### Introduction
#### Task 1: Project Set Up
- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] CD into the project base directory `cd web-module-project-s2m1-the-reducer-pattern`
- [ ] Download project dependencies by running `npm install`
- [ ] Start up the app using `npm start`

### Task 2: Connect the reducer and intitialState to the component.
- [ ] Take a tour of application, in particular the `App.js`, `/reducer/index.js`, and `/action/index.js` files.
- [ ] Within App.js, import the useReducer hook, our application's reducer and our application's initialState.
- [ ] Use useReducer hook to get access to the application state and dispatch.

### Task 3: Connect the state to our App.js DOM.
- [ ] Replace "X" with a reference to `state.operation` within the operation element.
- [ ] Replace "0" with a reference to `state.memory` within the memory element.
- [ ] Replace "0" with a reference to `state.total` when passing a value to our AnswerDisplay component.


**Moving the async call**

The async call being inside the component makes it hard to test the asynchronous nature of the component. Let's move the async function into an `/api` directory so we can easily mock that function and make the async tests easier.

1. Create a directory called `/api` in the `src` directory
1. Create a file inside `/api` called `fetchShow.js`
1. Move `fetchShow` into that new file and export it (fetchShow is in the `useEffect` - pay attention to how this was setting state. You will still need to set state in this effect hook the exact same way...)
1. Import `fetchShow` into `App.js` so you can make your async call from your `useEffect` hook.
1. You will need to `return` the `axios.get` call, _and_ the data inside your `.then()`. This is necessary because when you call `fetchShow` in your useEffect, you need to chain off the promise for a new `.then()`, then you need the data to be returned once the promise is resolved
1. Inside your `.then()` in the `useEffect` hook, set your data again.

- Note that you need `axios` in the new file

This should look something like this:

```javascript
// fetchShow.js
export const fetchShow = () => {
  return axios.get
    .then(res => return res) // or res.data, however you want to set that up
}
  
 // App.js
useEffect(() => {
  fetchShow
    .then(res => {
      // set state with the data
    }
}, []);
```

### Stretch goals

- There is an utility function in this project that contains an isolated pure function. Look up how to do `unit tests` with Jest and test that function.

- Look up the `TVMaze` API. Add a dropdown with the titles of some other popular shows. Add the user sequence of choosing a different show to fetch data for different shows.

- Add React Router, and add the functionality to click an episode and navigate to an episode page.
