import React, { useState, useReducer }  from 'react';
import reducer,  { initialState} from './reducers'
import { addOne, applyNumber, changeOp } from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  const onClick = (e) => {
    console.log('value XXX', e.target.innerText);
    
    switch(e.target.innerText) {
      case("+"):
          return dispatch(changeOp("+"));
      case("-"):
          return dispatch(changeOp("-"));
      default:
         return ;
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
            
            <TotalDisplay value={0}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> X</span>
              <span id="memory"><b>Memory:</b> 0</span>
            </div>
            
            <div className="row">
              <CalcButton onClick = {onClick} value={"M+"}/>
              <CalcButton onClick = {onClick} value={"MR"}/>
              <CalcButton onClick = {onClick} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick = {onClick} value={1}/>
              <CalcButton onClick = {onClick} value={2}/>
              <CalcButton onClick = {onClick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick = {onClick} value={4}/>
              <CalcButton onClick = {onClick} value={5}/>
              <CalcButton onClick = {onClick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick = {onClick} value={7}/>
              <CalcButton onClick = {onClick} value={8}/>
              <CalcButton onClick = {onClick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {onClick} value={"+"}/>
              <CalcButton onClick = {onClick} value={"*"}/>
              <CalcButton onClick = {onClick} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = {onClick} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
