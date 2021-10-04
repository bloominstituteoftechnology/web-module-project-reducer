import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { applyNumber, changeOperation, clearDisplay, memoryPlus, mR, memoryClear } from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddButton = (value) => {
  //   dispatch(addOne(value));
  // }

  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number));
  }

  const handleOperationChanger = (operation) => {
    dispatch(changeOperation(operation));
  }

  const clearDisplayHandler = () => {
    dispatch(clearDisplay());
  }

  const memoryPlusHandler = () => {
    dispatch(memoryPlus());
  }

  const mRHandler = () => {
    dispatch(mR());
  }

  const memoryClearHandler = () => {
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
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> { state.memory }</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=>{memoryPlusHandler()}} />
              <CalcButton value={"MR"} onClick={()=>{mRHandler()}} />
              <CalcButton value={"MC"} onClick={()=>{memoryClearHandler()}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>{handleApplyNumber(1)}}/>
              <CalcButton value={2} onClick={() => { handleApplyNumber(2) }}/>
              <CalcButton value={3} onClick={() => { handleApplyNumber(3) }}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => { handleApplyNumber(4) }}/>
              <CalcButton value={5} onClick={() => { handleApplyNumber(5) }}/>
              <CalcButton value={6} onClick={() => { handleApplyNumber(6) }}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => { handleApplyNumber(7) }}/>
              <CalcButton value={8} onClick={() => { handleApplyNumber(8) }}/>
              <CalcButton value={9} onClick={() => { handleApplyNumber(9) }}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={ ()=>{handleOperationChanger("+")} }/>
              <CalcButton value={"*"} onClick={ ()=>{handleOperationChanger("*")} }/>
              <CalcButton value={"-"} onClick={ ()=>{handleOperationChanger("-")} }/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>{clearDisplayHandler()} }/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
