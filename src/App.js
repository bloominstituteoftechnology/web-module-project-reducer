import React, { useReducer } from 'react';

import { addOne, applyNumber, changeOp, clearDisplay, changeMem } from './actions/index.js';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleMemory = (e) => {
    const memoryOp = e.target.value;
    dispatch(changeMem(memoryOp));
  }

  const handleClick = (e) => {
    dispatch(applyNumber(e.target.value));
  }

  const handleChangeOperator = (e) => {
    const operator = e.target.value;
    dispatch(changeOp(operator));
  }

  const handleClearDisplay = (e) => {
    dispatch(clearDisplay());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            <div className="row">
              <CalcButton value={"M+"}
                onClick={handleMemory} />
              <CalcButton value={"MR"}
                onClick={handleMemory} />
              <CalcButton value={"MC"}
                onClick={handleMemory} />
            </div>

            <div className="row">
              <CalcButton value={1}
                onClick={handleClick} />
              <CalcButton value={2}
                onClick={handleClick} />
              <CalcButton value={3}
                onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={4}
                onClick={handleClick} />
              <CalcButton value={5}
                onClick={handleClick} />
              <CalcButton value={6}
                onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={7}
                onClick={handleClick} />
              <CalcButton value={8}
                onClick={handleClick} />
              <CalcButton value={9}
                onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={"+"}
                onClick={handleChangeOperator} />
              <CalcButton value={"*"}
                onClick={handleChangeOperator} />
              <CalcButton value={"-"}
                onClick={handleChangeOperator} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}
                onClick={handleClearDisplay} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
