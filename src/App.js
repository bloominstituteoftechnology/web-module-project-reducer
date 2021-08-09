import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import { applyNumber, changeOperation, clearCalc, enterNumber, setMemoryVal, grabMemoryVal, clearMemory } from './actions/index'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleApplyNumber=(num)=>{
    dispatch(applyNumber(num.toString()))
  }
  const handleOperation=(symbol)=>{
    dispatch(changeOperation(symbol))
    
  }
  console.log(state.num1)
  const handleClear=()=>{
    dispatch(clearCalc())
  }
  const handleMemory=()=>{
    dispatch(setMemoryVal())
  }
  const grabMemory=(num)=>{
    dispatch(grabMemoryVal(num))
  }
  const memoryCleared=()=>{
    dispatch(clearMemory())
  }
  const enteredNumber=()=>{
    dispatch(enterNumber())
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
              <CalcButton onClick={()=>{handleMemory(state.total)}} value={"M+"}/>
              <CalcButton onClick={()=>{grabMemory(state.memory)}} value={"MR"}/>
              <CalcButton onClick={()=>{memoryCleared()}} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{handleApplyNumber(1)}} value={1}/>
              <CalcButton onClick={()=>{handleApplyNumber(2)}} value={2}/>
              <CalcButton onClick={()=>{handleApplyNumber(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{handleApplyNumber(4)}} value={4}/>
              <CalcButton onClick={()=>{handleApplyNumber(5)}} value={5}/>
              <CalcButton onClick={()=>{handleApplyNumber(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{handleApplyNumber(7)}} value={7}/>
              <CalcButton onClick={()=>{handleApplyNumber(8)}} value={8}/>
              <CalcButton onClick={()=>{handleApplyNumber(9)}} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{handleOperation('+')}} value={"+"}/>
              <CalcButton onClick={()=>{handleOperation('*')}} value={"*"}/>
              <CalcButton onClick={()=>{handleOperation('-')}} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={()=>{handleClear()}} value={"CE"}/>
            </div>
            <div className="row ce_button">
              <CalcButton onClick={()=>{enteredNumber()}} value={"="}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
