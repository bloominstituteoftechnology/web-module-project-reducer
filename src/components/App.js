import React from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { useReducer } from 'react';
import { Reducer } from 'react';
import reducer, { initialState} from '../reducers';

import {clearMemory, applyMemory, addMemory, applyNumber, changeOperation, clearDisplay } from '../actions';


function App() {

  const [state, dispatch ] = useReducer(reducer, initialState)

  // const handleNumberClick =()=> {
  //   dispatch(addOne)
  // }
  const calculate =(number)=>{
    dispatch(applyNumber(number))
  }

  const changingOperation = (operation)=>{
    dispatch(changeOperation(operation))
  }

  const clearItAll = () =>{
    dispatch(clearDisplay())
  }

  const handleMemoryAdd = () => {
    dispatch(addMemory());
  }

  const handleApplyMemory = () =>{
    dispatch(applyMemory())
  }

  const handleMemoryClear =()=>{
    dispatch(clearMemory())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
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
              <CalcButton value={"M+"} onClick={handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick={handleApplyMemory}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> calculate(1)}/>
              <CalcButton value={2} onClick={()=> calculate(2)}/>
              <CalcButton value={3} onClick={()=> calculate(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> calculate(4)}/>
              <CalcButton value={5} onClick={()=> calculate(5)}/>
              <CalcButton value={6} onClick={()=> calculate(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> calculate(7)}/>
              <CalcButton value={8} onClick={()=> calculate(8)}/>
              <CalcButton value={9} onClick={()=> calculate(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> changingOperation("+")}/>
              <CalcButton value={"*"} onClick={()=> changingOperation("*")}/>
              <CalcButton value={"-"} onClick={()=> changingOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearItAll} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
