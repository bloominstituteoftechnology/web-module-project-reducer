import React, {useState, useReducer} from 'react';

import './App.css';
import reducer, { initialState } from './reducers/index'

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { applyNumber, changeOperation, clearDisplay, setCurrentTotal, addTotalWithMemory, clearMemory } from "./actions/index";

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  // const handleAddOne = e => {
  //   dispatch(addOne())
  // }

  const handleNumbers = number => {
    dispatch(applyNumber(number))
  }

  const handleOperation = operation => {
    dispatch(changeOperation(operation))
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  const handleCurrentTotal = () => {
    dispatch(setCurrentTotal())
  }

  const handleTotalWithMemory = () => {
    dispatch(addTotalWithMemory())
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleCurrentTotal()}/>
              <CalcButton value={"MR"} onClick={() => handleTotalWithMemory()}/>
              <CalcButton value={"MC"} onClick={() => handleClearMemory()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumbers(1)}/>
              <CalcButton value={2} onClick={() => handleNumbers(2)}/>
              <CalcButton value={3} onClick={() => handleNumbers(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumbers(4)}/>
              <CalcButton value={5} onClick={() => handleNumbers(5)}/>
              <CalcButton value={6} onClick={() => handleNumbers(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumbers(7)}/>
              <CalcButton value={8} onClick={() => handleNumbers(8)}/>
              <CalcButton value={9} onClick={() => handleNumbers(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperation("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
