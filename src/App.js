import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { 
  applyNumber, 
  changeOperation, 
  clearDisplay, 
  memoryAdd, 
  memoryClear,
  memoryRecall
} from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  // console.log('App.js 10 access to initialState',initialState);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('App.js 12 current state via dispatch useReducer', state);

  // const handleAddOneClick = e => {
  //   dispatch(addOne());
  // }
  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperationChange = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handelClearDisplayClick = () => {
    dispatch(clearDisplay())
  }

  const handleMemoryAdd = () => {
    dispatch(memoryAdd())
  }

  const handleMemoryRecall = () => {
    dispatch(memoryRecall())
  }

  const handleMemoryClear = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><img width="40px" src="./Lambda-Logo-Red.png" alt="" /> Lambda Reducer Challenge</a>
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
              <CalcButton value={"M+"} onClick={() => { handleMemoryAdd() }} />
              <CalcButton value={"MR"} onClick={() => { handleMemoryRecall() }} />
              <CalcButton value={"MC"} onClick={() => { handleMemoryClear() }}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumber(1)} />
              <CalcButton value={2} onClick={() => handleApplyNumber(2)} />
              <CalcButton value={3} onClick={() => handleApplyNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumber(4)} />
              <CalcButton value={5} onClick={() => handleApplyNumber(5)} />
              <CalcButton value={6} onClick={() => handleApplyNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumber(7)} />
              <CalcButton value={8} onClick={() => handleApplyNumber(8)} />
              <CalcButton value={9} onClick={() => handleApplyNumber(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => { handleOperationChange("+") }} />
              <CalcButton value={"*"} onClick={() => { handleOperationChange("*") }} />
              <CalcButton value={"-"} onClick={() => { handleOperationChange("-") }} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handelClearDisplayClick} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
