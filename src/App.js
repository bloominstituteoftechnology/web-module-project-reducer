import React, { useState, useReducer }  from 'react';
import reducer,  { initialState} from './reducers'
import { addOne, applyNumber, changeOp, clearDisplay, clearMemoryAction, actionMR} from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  // const addOneChange = (value) => {
  //   console.log("addOneChange buttom", value)
  //   // dispatch(addOne());
  //   dispatch(applyNumber());
  // }

  const onClickNum = (e) => {
    console.log('Number button label:', e.target.innerText);
    // dispatch(addOne())
    dispatch(applyNumber(parseInt(e.target.innerText)));
  }

  const onClickOp = (e) => {
        
    switch(e.target.innerText) {
      case("+"):
          return dispatch(changeOp("+"));
      case("-"):
          return dispatch(changeOp("-"));
      case("*"):
          return dispatch(changeOp("*"));
      case("CE"):
          return dispatch(clearDisplay());
      case("MC"):
          return dispatch(clearMemoryAction());
      case("MR"):
          return dispatch(actionMR());
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
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton onClick = {onClickOp} value={"M+"}/>
              <CalcButton onClick = {onClickOp} value={"MR"}/>
              <CalcButton onClick = {onClickOp} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick = {onClickNum} value={1}/>
              <CalcButton onClick = {onClickNum} value={2}/>
              <CalcButton onClick = {onClickNum} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick = {onClickNum} value={4}/>
              <CalcButton onClick = {onClickNum} value={5}/>
              <CalcButton onClick = {onClickNum} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick = {onClickNum} value={7}/>
              <CalcButton onClick = {onClickNum} value={8}/>
              <CalcButton onClick = {onClickNum} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {onClickOp} value={"+"}/>
              <CalcButton onClick = {onClickOp} value={"*"}/>
              <CalcButton onClick = {onClickOp} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = {onClickOp} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
