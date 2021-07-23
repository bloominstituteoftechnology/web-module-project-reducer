import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index'
import {
  addOne,
  addToMemory,
  applyNumber,
  changeOperation,
  clearDisplay,
  clearMemory,
  recallFromMemory
} from './actions/index'



function App() {
  const [state, dispatch] = useReducer(reducer, initialState) // useReducer takes 2 args - reducer fn and initial state
  // console.log(state);

  // const handleAdd = () => {
  //   dispatch(addOne())
  // }

  // onClick={handleAdd} // this was attached to the above handleAdd

  const handleClick = (number) => {
    dispatch(applyNumber(parseInt(number.target.innerText)))
    // console.log(number.target.innerText)
  } // when I just had applyNumber(number), I was returning a SyntheticBaseEvent with target.innerText = '1'

  const clearDisplayClick = () => {
    dispatch(clearDisplay())
  }

  const handleOperator = operator => {
    dispatch(changeOperation(operator.target.innerText))
    // console.log(operator.target.innerText);
  }

  const addToMemoryClick = () => {
    dispatch(addToMemory())
  }

  const recallFromMemoryClick = () => {
    dispatch(recallFromMemory())
  }

  const clearMemoryClick = () => {
    dispatch(clearMemory())
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
              <CalcButton onClick={addToMemoryClick} value={"M+"} />
              <CalcButton onClick={recallFromMemoryClick} value={"MR"} />
              <CalcButton onClick={clearMemoryClick} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={1} />
              <CalcButton onClick={handleClick} value={2} />
              <CalcButton onClick={handleClick} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={4} />
              <CalcButton onClick={handleClick} value={5} />
              <CalcButton onClick={handleClick} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={7} />
              <CalcButton onClick={handleClick} value={8} />
              <CalcButton onClick={handleClick} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={handleOperator} value={"+"} />
              <CalcButton onClick={handleOperator} value={"-"} />
              <CalcButton onClick={handleOperator} value={"*"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearDisplayClick} value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
