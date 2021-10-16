import React, {useReducer, useState} from 'react';
import reducer from './reducers/index';
import {initialState} from './reducers/index';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import {applyNumber, changeOperation, clearDisplay, memoryAdd, applyMemory, memoryClear} from './actions/index';

  // const [newTotal, setNewTotal] = useState("");


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleOneClick = (num) => {
    dispatch(applyNumber(num));
  }
  const operationClick = (operator) => {
    dispatch(changeOperation(operator))
  }
  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  }

  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  }

  const handleApplyMemory = ()=> {
    dispatch(applyMemory());
  }

  const handleMemoryClear = ()=> {
    dispatch(memoryClear());
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
              <CalcButton value={"M+"} onClick= {handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick= {handleApplyMemory}/>
              <CalcButton value={"MC"} onClick= {handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={ () => handleOneClick(1)}/>
              <CalcButton value={2} onClick={ () => handleOneClick(2)}/>
              <CalcButton value={3} onClick={ () => handleOneClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={ () => handleOneClick(4)}/>
              <CalcButton value={5} onClick={ () => handleOneClick(5)}/>
              <CalcButton value={6} onClick={ () => handleOneClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={ () => handleOneClick(7)}/>
              <CalcButton value={8} onClick={ () => handleOneClick(8)}/>
              <CalcButton value={9} onClick={ () => handleOneClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operationClick("+")}/>
              <CalcButton value={"*"} onClick={() => operationClick("*")}/>
              <CalcButton value={"-"} onClick={() => operationClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
