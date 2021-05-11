import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import { applyNumber, changeOperation, clearDisplay, changeMemory, clearMemory, recallMemory } from './actions/index';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer,initialState);
  
  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number));
  }
  const addOperator = () => {
    dispatch(changeOperation("+"));
  }
  const multiplyOperator = () => {
    dispatch(changeOperation("*"));
  }
  const subtractOperator = () => {
    dispatch(changeOperation("-"));
  }
  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  }
  const handleChangeMemory = () => {
    dispatch(changeMemory());
  }
  const handleClearMemory = () => {
    dispatch(clearMemory());
  }
  const handleMemoryRecall = () => {
    dispatch(recallMemory())
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
              <span id="operation"><b>operation</b> {state.operation}</span>
              <span id="memory"><b>memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick = {handleChangeMemory}/>
              <CalcButton value={"MR"} onClick = {handleMemoryRecall}/>
              <CalcButton value={"MC"} onClick = {handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick = {() => handleApplyNumber(1)}/>
              <CalcButton value={2} onClick = {() => handleApplyNumber(2)}/>
              <CalcButton value={3} onClick = {() => handleApplyNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick = {() => handleApplyNumber(4)}/>
              <CalcButton value={5} onClick = {() => handleApplyNumber(5)}/>
              <CalcButton value={6} onClick = {() => handleApplyNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick = {() => handleApplyNumber(7)}/>
              <CalcButton value={8} onClick = {() => handleApplyNumber(8)}/>
              <CalcButton value={9} onClick = {() => handleApplyNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = {addOperator}/>
              <CalcButton value={"*"} onClick = {multiplyOperator}/>
              <CalcButton value={"-"} onClick = {subtractOperator}/>
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
