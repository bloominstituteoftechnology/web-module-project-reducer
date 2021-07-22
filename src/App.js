import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { useReducer } from 'react';
import reducer, { initialState } from './reducers';

import { applyNumber, changeOperation, clearDisplay, memoryPlus, memoryRecall, memoryClear } from './actions'

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  // console.log(state);

  // const handleClick = (e) => {
  //   dispatch(addOne(e.target.value))
  // }
  
  const handleNumClick = (e) => {

    const num = parseInt(e.target.innerHTML, 10)
    dispatch(applyNumber(num))
  }

  const handleOperatorClick = e => {
    const oper = e.target.innerHTML;
    dispatch(changeOperation(oper))
  }

  const handleClearClick = () => {
    dispatch(clearDisplay());
  }

  const handleMemoryPlusClick = () => {
    dispatch(memoryPlus())
  }

  const handleMemoryRecallClick = () => {
    dispatch(memoryRecall())
  }

  const handleMemoryClearClick = () => {
    dispatch(memoryClear())
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
              <CalcButton value={"M+"} onClick={handleMemoryPlusClick}/>
              <CalcButton value={"MR"} onClick={handleMemoryRecallClick}/>
              <CalcButton value={"MC"} onClick={handleMemoryClearClick}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNumClick}/>
              <CalcButton value={2} onClick={handleNumClick}/>
              <CalcButton value={3} onClick={handleNumClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumClick}/>
              <CalcButton value={5} onClick={handleNumClick}/>
              <CalcButton value={6} onClick={handleNumClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumClick}/>
              <CalcButton value={8} onClick={handleNumClick}/>
              <CalcButton value={9} onClick={handleNumClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperatorClick}/>
              <CalcButton value={"*"} onClick={handleOperatorClick}/>
              <CalcButton value={"-"} onClick={handleOperatorClick}/>
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
