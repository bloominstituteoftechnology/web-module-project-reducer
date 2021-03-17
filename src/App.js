import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, {initialState} from './reducers/index.js'
import {addOne} from './actions/index.js'
import {applyNumber, clearDisplay, changeOperation, mPlus, mr, mc} from './actions/index.js'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const eventHandler = (callback, value = null) => {
    if (value) {
      return () => dispatch(callback(value))
    } else {
      return () => dispatch(callback())
    }
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
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={eventHandler(mPlus)}/>
              <CalcButton value={"MR"} onClick={eventHandler(mr)}/>
              <CalcButton value={"MC"} onClick={eventHandler(mc)}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={eventHandler(applyNumber, 1)}/>
              <CalcButton value={2} onClick={eventHandler(applyNumber, 2)}/>
              <CalcButton value={3} onClick={eventHandler(applyNumber, 3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={eventHandler(applyNumber, 4)}/>
              <CalcButton value={5} onClick={eventHandler(applyNumber, 5)}/>
              <CalcButton value={6} onClick={eventHandler(applyNumber, 6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={eventHandler(applyNumber, 7)}/>
              <CalcButton value={8} onClick={eventHandler(applyNumber, 8)}/>
              <CalcButton value={9} onClick={eventHandler(applyNumber, 9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={eventHandler(changeOperation,"+")}/>
              <CalcButton value={"*"} onClick={eventHandler(changeOperation,"*")}/>
              <CalcButton value={"-"} onClick={eventHandler(changeOperation,"-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={eventHandler(clearDisplay)}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
