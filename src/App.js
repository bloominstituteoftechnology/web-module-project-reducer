import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/index';
import {  applyNumber, operationChanger, clearDisplay, memValue, valueMem, memZero } from './actions/index';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const doTheThing = (num) =>
    {
      dispatch(applyNumber(num));
    }
  const operate = (op) =>
  {
    dispatch(operationChanger(op));
  }
  const [state, dispatch] = useReducer(reducer, initialState);
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
              <CalcButton value={"M+"} onClick = {() =>dispatch(memValue())}/>
              <CalcButton value={"MR"} onClick = {() =>dispatch(valueMem())}/>
              <CalcButton value={"MC"} onClick = {() =>dispatch(memZero())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick = {() => doTheThing(1)}/>
              <CalcButton value={2} onClick = {() => doTheThing(2)}/>
              <CalcButton value={3} onClick = {() => doTheThing(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick = {() => doTheThing(4)}/>
              <CalcButton value={5} onClick = {() => doTheThing(5)}/>
              <CalcButton value={6} onClick = {() => doTheThing(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick = {() => doTheThing(7)}/>
              <CalcButton value={8} onClick = {() => doTheThing(8)}/>
              <CalcButton value={9} onClick = {() => doTheThing(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = {() => operate("+")}/>
              <CalcButton value={"*"} onClick = {() => operate("*")}/>
              <CalcButton value={"-"} onClick = {() => operate("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {() => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
