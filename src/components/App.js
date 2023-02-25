import React, {useReducer}from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import {
  applyNumber, 
  changeOperation, 
  clearDisplay,
  addMemory, 
  applyMemory,
  clearMemory} from '../actions'

import reducer, {initialState} from '../reducers'
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

const handleNumberClick = (number) => {
  dispatch(applyNumber(number))
}

const handlerChangeOperator = (operator) => {
  dispatch(changeOperation(operator))
}

const handleClearDisplay = () => {
  dispatch(clearDisplay());
}

const handleMemoryAdd = () => {
  dispatch(addMemory());
}

const handleApplyMemory = () => {
  dispatch(applyMemory());
}

const handleMemoryClear = () => {
  dispatch(clearMemory());
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
              <CalcButton value={1} onClick={()=>handleNumberClick(1)}/>
              <CalcButton value={2} onClick={()=>handleNumberClick(2)}/>
              <CalcButton value={3} onClick={()=>handleNumberClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>handleNumberClick(4)}/>
              <CalcButton value={5} onClick={()=>handleNumberClick(5)}/>
              <CalcButton value={6} onClick={()=>handleNumberClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>handleNumberClick(7)}/>
              <CalcButton value={8} onClick={()=>handleNumberClick(8)}/>
              <CalcButton value={9} onClick={()=>handleNumberClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>handlerChangeOperator("+")}/>
              <CalcButton value={"*"} onClick={()=>handlerChangeOperator("*")}/>
              <CalcButton value={"-"} onClick={()=>handlerChangeOperator("-")}/>
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
