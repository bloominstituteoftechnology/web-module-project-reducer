import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { applyNumber, changeOperation, clearDisplay, memoryOperation } from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state, dispatch);

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
              <CalcButton 
                value={"M+"}
                onClick={(n) => {
                  dispatch(memoryOperation("M+"))
                }}
              />
              <CalcButton 
                value={"MR"}
                onClick={(n) => {
                  dispatch(memoryOperation("MR"))
                }}
              />
              <CalcButton 
                value={"MC"}
                onClick={(n) => {
                  dispatch(memoryOperation("MC"))
                }}
              />
            </div>

            <div className="row">
              <CalcButton 
                value={1}
                onClick={(n) => {
                  dispatch(applyNumber(1))
                }}
              />
              <CalcButton 
                value={2}
                onClick={(n) => {
                  dispatch(applyNumber(2))
                }}
              />
              <CalcButton 
                value={3}
                onClick={(n) => {
                  dispatch(applyNumber(3))
                }}
              />
            </div>

            <div className="row">
              <CalcButton 
                value={4}
                onClick={(n) => {
                  dispatch(applyNumber(4))
                }}
              />
              <CalcButton 
                value={5}
                onClick={(n) => {
                  dispatch(applyNumber(5))
                }}
              />
              <CalcButton  
                value={6}
                onClick={(n) => {
                  dispatch(applyNumber(6))
                }}
              />
            </div>

            <div className="row">
              <CalcButton 
                value={7}
                onClick={(n) => {
                  dispatch(applyNumber(7))
                }}
              />
              <CalcButton 
                value={8}
                onClick={(n) => {
                  dispatch(applyNumber(8))
                }}
              />
              <CalcButton 
                value={9}
                onClick={(n) => {
                  dispatch(applyNumber(9))
                }}
              />
            </div>

            <div className="row">
              <CalcButton 
                value={"+"}
                onClick={(n) => {
                  dispatch(changeOperation("+"))
                }}
              />
              <CalcButton 
                value={"*"}
                onClick={(n) => {
                  dispatch(changeOperation("*"))
                }}
              />
              <CalcButton 
                value={"-"}
                onClick={(n) => {
                  dispatch(changeOperation("-"))
                }}
              />
            </div>

            <div className="row ce_button">
              <CalcButton 
                value={"CE"}
                onClick={(n) => {
                  dispatch(clearDisplay())
                }}
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
