import React, {useReducer} from 'react';
import './App.css';
import reducer, {initialState} from "./reducers/index"
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import {applyNumber,changeOperation,deleteDaddy,memoryAdd,memoryToTotal,mrReset} from "./actions"

function App() {
  const[state, dispatch] = useReducer(reducer, initialState);
 
  const applyNumber1 = (int) => {
    dispatch(applyNumber(int))
  }

  const changeDaddy1 = (int) => {
    dispatch(changeOperation(int))
  }

  const resetDisplay1 = (int) => {
    dispatch(deleteDaddy(int))
  }

  const memoryPlus1 = (int) => {
    dispatch(memoryAdd(int))
  }

  const mrButton1 = (int) => {
    dispatch(memoryToTotal(int))
  }
const mrButtonReset1 = (int) => {
  dispatch(mrReset(int))
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
              <CalcButton onClick = {() => memoryPlus1()}value={"M+"}/>
              <CalcButton onClick= {() => mrButton1()} value={"MR"}/>
              <CalcButton  onClick= {() => mrButtonReset1()}value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => applyNumber1(1)} value={1}/>

              <CalcButton onClick = {() => applyNumber1(2)} value={2}/>
              <CalcButton onClick = {() => applyNumber1(3)} value={3}/>
            </div>

            <div className="row">
            <CalcButton onClick = {() => applyNumber1(4)} value={4}/>
            <CalcButton onClick = {() => applyNumber1(5)} value={5}/>
            <CalcButton onClick = {() => applyNumber1(6)} value={6}/>
            </div>

            <div className="row">
            <CalcButton onClick = {() => applyNumber1(7)} value={7}/>
            <CalcButton onClick = {() => applyNumber1(8)} value={8}/>
            <CalcButton onClick = {() => applyNumber1(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => changeDaddy1("+")} value={"+"}/>
              <CalcButton onClick = {() => changeDaddy1("*")} value={"*"}/>
              <CalcButton onClick = {() => changeDaddy1("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
             <CalcButton onClick = {() => resetDisplay1(null)} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
