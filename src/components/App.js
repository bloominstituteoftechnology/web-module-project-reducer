import React from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { useReducer } from 'react';
import { Reducer } from 'react';
import reducer, { initialState } from '../reducers';

import { clearMemory, applyMemory, addMemory, applyNumber, changeOperation, clearDisplay } from '../actions';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const calculate = (number) => {
    dispatch(applyNumber(number))
  }

  const changeOperation = (operation) => {
    dispatch(changeOperation(operation))
  }

  const clearItAll = () => {
    dispatch(clearDisplay())
  }

  const handleMemoryAdd = () => {
    dispatch(addMemory());
  }

  const handleMemoryClear = () => {
    dispatch(clearMemory())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
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
              <CalcButton value={"M+"} onClick={handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick={handleApplyMemory}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onlick={() => calculate(1)}/>
              <CalcButton value={2} onlick={() => calculate(2)}/>
              <CalcButton value={3} onlick={() => calculate(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onlick={() => calculate(4)}/>
              <CalcButton value={5} onlick={() => calculate(5)}/>
              <CalcButton value={6} onlick={() => calculate(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onlick={() => calculate(7)}/>
              <CalcButton value={8} onlick={() => calculate(8)}/>
              <CalcButton value={9} onlick={() => calculate(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onlick={() => changingOperation("+")}/>
              <CalcButton value={"*"} onlick={() => changingOperation("*")}/>
              <CalcButton value={"-"} onlick={() => changingOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onlick={clearItAll}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
