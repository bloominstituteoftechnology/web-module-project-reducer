import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import './App.css';

import { addOne, applyNumber } from './actions/index'

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


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
              <CalcButton value={1} onClick={() => dispatch(applyNumber(1))}/>
              <CalcButton value={2} onClick={() => dispatch(applyNumber(2))}/>
              <CalcButton value={3} onClick={() => dispatch(applyNumber(3))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => dispatch(applyNumber(4))}/>
              <CalcButton value={5} onClick={() => dispatch(applyNumber(5))}/>
              <CalcButton value={6} onClick={() => dispatch(applyNumber(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => dispatch(applyNumber(7))}/>
              <CalcButton value={8} onClick={() => dispatch(applyNumber(8))}/>
              <CalcButton value={9} onClick={() => dispatch(applyNumber(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
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
