
import React, { useState, useReducer } from 'react';
import './App.css';
import reducer, {initialState} from './reducers'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import {addOne,applyNumber,changeOperator,clearDisplay,memoryOne,clearMemory} from './actions'


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const addFunc = (value) => {
    console.log('clicked 1')
    dispatch(applyNumber(value));
  }

  const operatorFunc = (op) => {
    dispatch(changeOperator(op));
  }
  
  const handleClear = () => {
    dispatch(clearDisplay());
  }

  const memoryOneFunc = (mem) => {
    dispatch(memoryOne(mem))
  }

  const clearMemoryFunc = () => {
    dispatch(clearMemory())
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
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton onClick={()=>memoryOneFunc(state.total)} value={"M+"}/>
              <CalcButton onClick={() => addFunc(state.memory)} value={"MR"}/>
              <CalcButton onClick={clearMemoryFunc} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => addFunc(1)} value={1}/>
              <CalcButton onClick={() => addFunc(2)} value={2}/>
              <CalcButton onClick={() => addFunc(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => addFunc(4)} value={4}/>
              <CalcButton onClick={() => addFunc(5)} value={5}/>
              <CalcButton onClick={() => addFunc(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => addFunc(7)} value={7}/>
              <CalcButton onClick={() => addFunc(8)} value={8}/>
              <CalcButton onClick={() => addFunc(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => operatorFunc("+")} value={"+"}/>
              <CalcButton onClick={() => operatorFunc("*")} value={"*"}/>
              <CalcButton onClick={() => operatorFunc("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
