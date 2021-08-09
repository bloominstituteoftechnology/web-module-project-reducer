import React, {useReducer} from 'react';
import './App.css';
import reducer, {initialState} from "./reducers/index"
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY} from './actions';
function App() {
  const[state, dispatch] = useReducer(reducer, initialState);
  

  //Handler functions

  // Add One handler
  // const addOneClick = (int) =>
  // {
  //   //Call dispatch function, pass addOne from Reducers/Index
  //   dispatch({type:ADD_ONE, payload:int});
  // }
  const applyNumber = (int) => {
    dispatch({type:APPLY_NUMBER, payload:int})
  }

  const changeDaddy = (int) => {
    dispatch({type:CHANGE_OPERATION, payload: int})
  }

  const resetDisplay = () => {
    dispatch({type:CLEAR_DISPLAY})
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
              <CalcButton onClick = {() => applyNumber(1)} value={1}/>

              <CalcButton onClick = {() => applyNumber(2)} value={2}/>
              <CalcButton onClick = {() => applyNumber(3)} value={3}/>
            </div>

            <div className="row">
            <CalcButton onClick = {() => applyNumber(4)} value={4}/>
            <CalcButton onClick = {() => applyNumber(5)} value={5}/>
            <CalcButton onClick = {() => applyNumber(6)} value={6}/>
            </div>

            <div className="row">
            <CalcButton onClick = {() => applyNumber(7)} value={7}/>
            <CalcButton onClick = {() => applyNumber(8)} value={8}/>
            <CalcButton onClick = {() => applyNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => changeDaddy("+")} value={"+"}/>
              <CalcButton onClick = {() => changeDaddy("*")} value={"*"}/>
              <CalcButton onClick = {() => changeDaddy("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
             <CalcButton onClick = {() => resetDisplay(null)} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
