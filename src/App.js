import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import './App.css';

import { addOne, applyNumber, changeOperation, clearDisplay, addToMemory, applyMemory, clearMemory } from './actions/index'

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (num) => {
    dispatch(applyNumber(num))
  }

  const handleOperationChange = (operator) => {
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
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(addToMemory(state.total))}/>
              <CalcButton value={"MR"} onClick={() => dispatch(applyMemory())}/>
              <CalcButton value={"MC"} onClick={() => dispatch(clearMemory())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleChange(1)}/>
              <CalcButton value={2} onClick={() => handleChange(2)}/>
              <CalcButton value={3} onClick={() => handleChange(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleChange(4)}/>
              <CalcButton value={5} onClick={() => handleChange(5)}/>
              <CalcButton value={6} onClick={() => handleChange(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleChange(7)}/>
              <CalcButton value={8} onClick={() => handleChange(8)}/>
              <CalcButton value={9} onClick={() => handleChange(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperationChange("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperationChange("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperationChange("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
