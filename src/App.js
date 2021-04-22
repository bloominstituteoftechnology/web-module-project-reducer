import React, { useReducer } from 'react';
import {applyNumber, operationChanger, clearDisplay, memValue, valueMem, memZero} from './actions/index'
import reducer, { initialState } from './reducers/index'
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const action = (num) => {
    TotalDisplay(applyNumber(num))
  }
  const work = (opt) => {
    dispatch(operationChanger(opt))
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={0}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick = {() => dispatch(memValue)}/>
              <CalcButton value={"MR"} onClick = {() => dispatch(valueMem)}/>
              <CalcButton value={"MC"} onClick = {() => dispatch(memZero)}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick = {() => action}/>
              <CalcButton value={2} onClick = {() => action}/>
              <CalcButton value={3} onClick = {() => action}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick = {() => action}/>
              <CalcButton value={5} onClick = {() => action}/>
              <CalcButton value={6} onClick = {() => action}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick = {() => action}/>
              <CalcButton value={8} onClick = {() => action}/>
              <CalcButton value={9} onClick = {() => action}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = {() => work}/>
              <CalcButton value={"*"} onClick = {() => work}/>
              <CalcButton value={"-"} onClick = {() => work}/>
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
