import React, { useReducer }from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import { applyNumber, changeOperation, clearDisplay, Memory } from './actions/index'

function App()  {

  const [state, dispatch] = useReducer(reducer,initialState);

  const handleMath = (value) => {
    dispatch(applyNumber(value))
  }

  const handleOperator =(operator) =>{
    dispatch(changeOperation(operator))
  }

  const handleClear = () =>{
    dispatch(clearDisplay())
  }

  const handleMemory = (num) =>{
    dispatch(Memory(num))
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
              <CalcButton value={"M+"}onClick={() => handleMemory(1)}/>
              <CalcButton value={"MR"}onClick={() => handleMemory(2)}/>
              <CalcButton value={"MC"}onClick={() => handleMemory(3)}/>
            </div>

            <div className="row">
              <CalcButton value={1}onClick={() => handleMath(1)}/>
              <CalcButton value={2}onClick={() => handleMath(2)}/>
              <CalcButton value={3}onClick={() => handleMath(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4}onClick={() => handleMath(4)}/>
              <CalcButton value={5}onClick={() => handleMath(5)}/>
              <CalcButton value={6}onClick={() => handleMath(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7}onClick={() => handleMath(7)}/>
              <CalcButton value={8}onClick={() => handleMath(8)}/>
              <CalcButton value={9}onClick={() => handleMath(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}onClick={() => handleOperator('+')}/>
              <CalcButton value={"*"}onClick={() => handleOperator('*')}/>
              <CalcButton value={"-"}onClick={() => handleOperator('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}onClick={() => handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
