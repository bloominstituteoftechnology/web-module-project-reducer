import React, { useReducer } from 'react';
import reducer, {initialState} from './reducers/index';
import { applyNumber, changeOperation, clearDisplay } from './actions/index'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

let currentState = initialState;
console.log("currentState: ", currentState)
currentState = reducer(currentState, {type:"ADD", payload:5});

console.log("currentState: ", currentState)

function App() {

  const [ state, dispatch ] = useReducer (reducer, initialState);
  console.log(state)

  const handleAddClick = (num) => {
    dispatch(applyNumber(num));
  }
  
  const handleOperatorClick = (operator) => {
    dispatch(changeOperation(operator));
  }
  const handleClearClick = () => {
    dispatch(clearDisplay());
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAddClick(1)}/>
              <CalcButton value={2} onClick={() => handleAddClick(2)}/>
              <CalcButton value={3} onClick={() => handleAddClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAddClick(4)}/>
              <CalcButton value={5} onClick={() => handleAddClick(5)}/>
              <CalcButton value={6} onClick={() => handleAddClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAddClick(7)}/>
              <CalcButton value={8} onClick={() => handleAddClick(8)}/>
              <CalcButton value={9} onClick={() => handleAddClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperatorClick("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperatorClick("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperatorClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClearClick()} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;