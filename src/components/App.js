import React, { useReducer } from 'react';
import reducer, { initialState } from "../reducers/index";
import {addOne, applyNumber, changeOperation, handleClear, handleSaveMemory, memoryApplyNumber, memoryClear} from "../actions/index";

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleClick = (event) => {
    // dispatch(addOne()); 
    const currentNum = event.target.value;
    dispatch(applyNumber(currentNum));
  }

  const handleClickOperation = (event) => {
    const operation = event.target.value;
    dispatch(changeOperation(operation));
    }

  const handleClickClear = () => {
    dispatch(handleClear());
  }

  const handleMemoryCall = (event) => {
    const memory = event.target.value
    if (memory === "M+"){
      dispatch(handleSaveMemory());
    }
    else if (memory === "MR"){
      dispatch(memoryApplyNumber());
    }
    else if (memory === "MC") {
      dispatch(memoryClear());
    }
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
              <CalcButton value={"M+"} onClick={handleMemoryCall}/>
              <CalcButton value={"MR"} onClick={handleMemoryCall}/>
              <CalcButton value={"MC"} onClick={handleMemoryCall}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleClick}/>
              <CalcButton value={2} onClick={handleClick}/>
              <CalcButton value={3} onClick={handleClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleClick}/>
              <CalcButton value={5} onClick={handleClick}/>
              <CalcButton value={6} onClick={handleClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleClick}/>
              <CalcButton value={8} onClick={handleClick}/>
              <CalcButton value={9} onClick={handleClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleClickOperation}/>
              <CalcButton value={"*"} onClick={handleClickOperation}/>
              <CalcButton value={"-"} onClick={handleClickOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClickClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
