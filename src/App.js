import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { addMemory, applyNumber, changeOperation, clearDisplay, clearMemory, showMemory } from './actions';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleNumberClick = (e) => {
    dispatch(applyNumber(parseInt(e.target.textContent)));
  }

  const handleOperationClick = (e) => {
    dispatch(changeOperation(e.target.textContent));
  }

  const handleClearClick = () => {
    dispatch(clearDisplay());
  }

  const handleAddMemoryClick = () => {
    dispatch(addMemory());
  }
  
  const handleShowMemoryClick = () => {
    dispatch(showMemory());
  }

  const handleClearMemoryClick = () => {
    dispatch(clearMemory());
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
              <CalcButton value={"M+"} onClick={handleAddMemoryClick}/>
              <CalcButton value={"MR"} onClick={handleShowMemoryClick}/>
              <CalcButton value={"MC"} onClick={handleClearMemoryClick}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNumberClick}/>
              <CalcButton value={2} onClick={handleNumberClick}/>
              <CalcButton value={3} onClick={handleNumberClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumberClick}/>
              <CalcButton value={5} onClick={handleNumberClick}/>
              <CalcButton value={6} onClick={handleNumberClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumberClick}/>
              <CalcButton value={8} onClick={handleNumberClick}/>
              <CalcButton value={9} onClick={handleNumberClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperationClick}/>
              <CalcButton value={"*"} onClick={handleOperationClick}/>
              <CalcButton value={"-"} onClick={handleOperationClick}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearClick}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
