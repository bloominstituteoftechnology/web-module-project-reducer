import React, {useReducer} from 'react';
import reducer, {initialState, calculateResult} from './reducers/index'
import './App.css';
import {addOne} from './actions/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import {memoryClear, applyNumber, changeOperator, clearDisplay, memoryAdd, memoryReturn} from './actions/index'

function App() {
const [state, dispatch] = useReducer(reducer, initialState)

const clicker = (num) => {
  dispatch(applyNumber(num))
}
const changeOperation = (opertor) => {
  dispatch(changeOperator(opertor))
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
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={()=>{dispatch(memoryAdd())}} value={"M+"}/>
              <CalcButton onClick={()=>{dispatch(memoryReturn())}} value={"MR"}/>
              <CalcButton onClick={()=>{dispatch(memoryClear())}} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{clicker(1)}} value={1}/>
              <CalcButton onClick={()=>{clicker(2)}} value={2}/>
              <CalcButton onClick={()=>{clicker(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{clicker(4)}} value={4}/>
              <CalcButton onClick={()=>{clicker(5)}} value={5}/>
              <CalcButton onClick={()=>{clicker(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>{clicker(7)}} value={7}/>
              <CalcButton onClick={()=>{clicker(8)}} value={8}/>
              <CalcButton onClick={()=>{clicker(9)}} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() =>{changeOperation("+")}} value={"+"}/>
              <CalcButton onClick={() =>{changeOperation("*")}} value={"*"}/>
              <CalcButton onClick={() =>{changeOperation("-")}} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => {dispatch(clearDisplay())}} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
