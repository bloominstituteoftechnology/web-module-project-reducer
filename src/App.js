//*💡 import the useReducer hook, our application's reducer and initialState object 

import React, { useReducer, useState } from "react";
import reducer, { initialState } from "./reducers";

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

//*✅ Replace addOne with applyNumber
//*✅ Test that clicking the one button still adds one to the total display on the browser.
// import {addOne} from "./actions";
import { applyNumber, changeOperation, clearDisplay, setMemory, clearMemory } from "./actions";

import './App.css';


function App() {
  //*💡 Use useReducer hook to get access to the application state and the dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, dispatch);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>
      {/* //*✅Check to see that your total, operation and memory display in the UI match your initialState (100, * and 100 respectively) */}
      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}
                onClick={() => dispatch(setMemory(state.total))}
              />
              <CalcButton value={"MR"}
                onClick={() => dispatch(applyNumber(state.memory))}
              />
              <CalcButton value={"MC"}
                onClick={() => dispatch(clearMemory())}
              />
            </div>

            {/*
            //*✅ Within App.js, create an event handler connected to the 1 button's onClick method.
            //*✅ Within your event handler, dispatch the addOne action creator.
            //*✅ Test that your event is correctly connected by pushing the 1 button in the browser. Your total should increase by 1.
            */}
            <div className="row">
              <CalcButton
                value={1}
                // onClick={() => dispatch(addOne(1))}
                onClick={() => dispatch(applyNumber(1))}
              />
              <CalcButton
                value={2}
                onClick={() => dispatch(applyNumber(2))}
              />
              <CalcButton
                value={3}
                onClick={() => dispatch(applyNumber(3))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={() => dispatch(applyNumber(4))}
              />
              <CalcButton
                value={5}
                onClick={() => dispatch(applyNumber(5))}
              />
              <CalcButton
                value={6}
                onClick={() => dispatch(applyNumber(6))}          
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={() => dispatch(applyNumber(7))}
              />
              <CalcButton
                value={8}
                onClick={() => dispatch(applyNumber(8))}
              />
              <CalcButton
                value={9}
                onClick={() => dispatch(applyNumber(9))}
              />
            </div>


            {/*
            //*✅ Create and attach event handlers to the +, - and * buttons that dispatch your new action creator
            //*✅ Test that you can successfully change operators and apply numbers in each case.
            */}
            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => dispatch(changeOperation("+"))}
              />
              <CalcButton
                value={"*"}
                onClick={() => dispatch(changeOperation("*"))}
              />
              <CalcButton
                value={"-"}
                onClick={() => dispatch(changeOperation("-"))}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch(clearDisplay())}
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
