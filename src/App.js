import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { applyNumber, changeOperation, clearDisplay, memoryPlus, memoryMR, memoryMC } from './actions/index';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const handleChanges = (number) => {
    dispatch(applyNumber(number));
  }

  const handleOperations = (operation) => {
    dispatch(changeOperation(operation));
  }

  const handleClear = (number) => {
    dispatch(clearDisplay(number))
  }

  const handleMPlus = (number) => {
    dispatch(memoryPlus(number))
  }

  const handleMR = (number) => {
    dispatch(memoryMR(number))
  }

  const handleMC = (number) => {
    dispatch(memoryMC(number))
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
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => handleMPlus()} value={"M+"}/>
              <CalcButton onClick={() => handleMR()} value={"MR"}/>
              <CalcButton onClick={() => handleMC()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChanges(1)} value={1}/>
              <CalcButton onClick={() => handleChanges(2)} value={2}/>
              <CalcButton onClick={() => handleChanges(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChanges(4)} value={4}/>
              <CalcButton onClick={() => handleChanges(5)} value={5}/>
              <CalcButton onClick={() => handleChanges(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChanges(7)} value={7}/>
              <CalcButton onClick={() => handleChanges(8)} value={8}/>
              <CalcButton onClick={() => handleChanges(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperations("+")} value={"+"}/>
              <CalcButton onClick={() => handleOperations("*")} value={"*"}/>
              <CalcButton onClick={() => handleOperations("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => handleClear(1)} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
