import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/index';
import { addOne, applyNumber, changOperation, clearDisplay, memoryAdd, memoryApply, memoryClear } from './actions/index';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState) 
  const handleNumClick = (num) => {
    dispatch(applyNumber(num))
  }
  const handleOperation = (operator) => {
    dispatch(changOperation(operator));
  }

  const handleClear = () => {
    dispatch(clearDisplay());
  }

  const handlememoryAdd = () => {
    dispatch(memoryAdd());
  }

  const handleMemoryApply = () => {
    dispatch(memoryApply());
  }

  const handleMemoryClear = () => {
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
              <CalcButton value={"M+"} onClick={() => handlememoryAdd}/>
              <CalcButton value={"MR"} onClick={() => handleMemoryApply}/>
              <CalcButton value={"MC"} onClick={() => handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumClick(1)}/>
              <CalcButton value={2} onClick={() => handleNumClick(2)}/>
              <CalcButton value={3} onClick={() => handleNumClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumClick(4)}/>
              <CalcButton value={5} onClick={() => handleNumClick(5)}/>
              <CalcButton value={6} onClick={() => handleNumClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumClick(7)}/>
              <CalcButton value={8} onClick={() => handleNumClick(8)}/>
              <CalcButton value={9} onClick={() => handleNumClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() =>handleOperation("+")}/>
              <CalcButton value={"*"} onClick={() =>handleOperation("*")}/>
              <CalcButton value={"-"} onClick={() =>handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() =>handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
