import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState, calculateResult} from './reducers/index'
import {
  addOne,
  changeOperation,
  applyNumber,
  clear,
  clearMemory,
  addToMemory
} from './actions/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChanges = e => {
    dispatch(applyNumber(e))
    console.log(state.total);
    console.log(state.operation)
  }

  const handleOperation = (e) => {
    dispatch(changeOperation(e))
  }

  const clearClick = () => {
    dispatch(clear())
  }

  const clearMemClick = () => {
    dispatch(clearMemory())
  }

  const addMemClick = () => {
    dispatch(addToMemory())
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
              <CalcButton value={"M+"} onClick={addMemClick}/>
              <CalcButton value={"MR"} onClick={() => handleChanges(state.memory)}/>
              <CalcButton value={"MC"} onClick={clearMemClick}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleChanges(1)} />
              <CalcButton value={2} onClick={() => handleChanges(2)} />
              <CalcButton value={3} onClick={() => handleChanges(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleChanges(4)}/>
              <CalcButton value={5} onClick={() => handleChanges(5)}/>
              <CalcButton value={6} onClick={() => handleChanges(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleChanges(7)}/>
              <CalcButton value={8} onClick={() => handleChanges(8)}/>
              <CalcButton value={9} onClick={() => handleChanges(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation('+')}/>
              <CalcButton value={"*"} onClick={() => handleOperation('*')}/>
              <CalcButton value={"-"} onClick={() => handleOperation('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
