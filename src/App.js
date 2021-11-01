import React, { useState, useReducer } from 'react';
import reducer, { initialState } from './reducers/index';
import './App.css';
import { addOne, applyNumber, changeOperation, clearDisplay, memory, applyMemory, clearMemory, equals } from './actions'

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state,dispatch] = useReducer(reducer, initialState);
  console.log('Step 1/5: State is rendered to the page')

  const applyNumero = (e) =>{
    console.log("Step 2: Click handler dispatches addNumero action!")
    const parsed = parseInt(e.target.textContent)
    dispatch(applyNumber(parsed))
  }

  const changeOperator = (e) =>{
    console.log(e.target.outerText)
    dispatch(changeOperation(e.target.outerText))
  }

  const clear = ()=>{
    dispatch(clearDisplay())
  }

  const dispatchMemory = () => {
    dispatch(memory())
  }

  const appMem = () => {
    dispatch(applyMemory())
  }

  const clearMem = () => {
    console.log("Step 2: onClick")
    dispatch(clearMemory())
  }

  const eq = () => {
    console.log("Step 2: onClick")
    dispatch(equals())
  }
 

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.display}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={dispatchMemory}/>
              <CalcButton value={"MR"} onClick={appMem}/>
              <CalcButton value={"MC"} onClick={clearMem}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick = {applyNumero}/>
              <CalcButton value={2} onClick={applyNumero}/>
              <CalcButton value={3} onClick={applyNumero}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={applyNumero}/>
              <CalcButton value={5} onClick={applyNumero}/>
              <CalcButton value={6} onClick={applyNumero}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={applyNumero}/>
              <CalcButton value={8} onClick={applyNumero}/>
              <CalcButton value={9} onClick={applyNumero}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={changeOperator}/>
              <CalcButton value={"*"} onClick={changeOperator}/>
              <CalcButton value={"-"} onClick={changeOperator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clear}/>
              <CalcButton value={"="} onClick={eq}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
