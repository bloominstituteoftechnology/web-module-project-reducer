import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers';
import {applyNumber, changeOperator, clearDisplay, addToMemory, memoryToTotal, memoryToZero} from './../src/actions'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log("current state: ", state)
  
  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number))
  }
  const handleChangeOperator = (operator) => {
    dispatch(changeOperator(operator))
  }
  const handleClearDisplay = () => {
    dispatch(clearDisplay())
  }
  const handleAddToMemory = () => {
    dispatch(addToMemory())
  }
  const handleMemoryToTotal = () => {
    dispatch(memoryToTotal())
  }
  const handleMemoryToZero = () => {
    dispatch(memoryToZero())
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
              <CalcButton value={"M+"} onClick={handleAddToMemory}/>
              <CalcButton value={"MR"} onClick={handleMemoryToTotal}/>
              <CalcButton value={"MC"} onClick={handleMemoryToZero}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumber(1)} />
              <CalcButton value={2} onClick={() => handleApplyNumber(2)}/>
              <CalcButton value={3} onClick={() => handleApplyNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumber(4)}/>
              <CalcButton value={5} onClick={() => handleApplyNumber(5)}/>
              <CalcButton value={6} onClick={() => handleApplyNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumber(7)}/>
              <CalcButton value={8} onClick={() => handleApplyNumber(8)}/>
              <CalcButton value={9} onClick={() => handleApplyNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleChangeOperator("+")}/>
              <CalcButton value={"*"} onClick={() => handleChangeOperator("*")}/>
              <CalcButton value={"-"} onClick={() => handleChangeOperator("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
