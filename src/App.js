import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, {initialState} from './reducers/index'
import {addOne, applyNumber, clearDisplay, changeOperation, memoryAdd, memorySet, memoryReset} from './actions/index'

function App() {
const [state, dispatch] = useReducer(reducer, initialState)

const changeNumber = (num) => {
  dispatch(applyNumber(num));
}
const changeOperand = (operator)=>{
  dispatch(changeOperation(operator))
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
              <span id="memory"><b>Memory:</b>{state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=>{dispatch(memorySet())}}/>
              <CalcButton value={"MR"} onClick={()=>{dispatch(memoryAdd())}}/>
              <CalcButton value={"MC"} onClick={()=>{dispatch(memoryReset())}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>{changeNumber(1)}}/>
              <CalcButton value={2} onClick={()=>{changeNumber(2)}}/>
              <CalcButton value={3} onClick={()=>{changeNumber(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>{changeNumber(4)}}/>
              <CalcButton value={5} onClick={()=>{changeNumber(5)}}/>
              <CalcButton value={6} onClick={()=>{changeNumber(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>{changeNumber(7)}}/>
              <CalcButton value={8} onClick={()=>{changeNumber(8)}}/>
              <CalcButton value={9} onClick={()=>{changeNumber(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>{changeOperand("+")}}/>
              <CalcButton value={"*"} onClick={()=>{changeOperand("*")}}/>
              <CalcButton value={"-"} onClick={()=>{changeOperand("-")}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=> {dispatch(clearDisplay())}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
