
//Imports
import React, {useReducer} from 'react';
import './App.css';
import reducer, {initialState} from "./reducers/index"
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_PLUS, MEMORY_R, MEMORY_C } from './actions';


function App() 
{
  //Initial state, useReducer init to reducer() and initialState
  const[state, dispatch] = useReducer(reducer, initialState);

  console.log(">>>>>", initialState, "<<<<");
  console.log(">>>", state, "<<<");
  //Handler functions

  //Add One handler
  // const addOneClick = (numOne) =>
  // {
  //   //Call dispatch function, pass ADD_ONE from Reducers/Index and parameter to hold number
  //   dispatch({type: ADD_ONE, payload: numOne}); 
  //   console.log(">>>>>NUM1", initialState, "<<<<");
  // }

  //ApplyNumberClick handler (), pass a parameter to hold a number
  const applyNumberClick = (someNumber) =>
  {
    //call dispatch function, pass APPLY_NUMBER from reducers/index and parameter to hold number
    dispatch({type: APPLY_NUMBER, payload: someNumber});
  }

  //Function to change operations
  const changeOperationsClick = (operator) =>
  {
    //call dispatch function, pass CHANGE_OPERATION from reducers/index and parameter to hold number
    dispatch({type: CHANGE_OPERATION , payload: operator});
  }

  const clearDisplayClick = () =>
  {
    dispatch({type: CLEAR_DISPLAY});
  }

  const memoryPlusClick= () =>
  {
    dispatch({type: MEMORY_PLUS});
  }

  const memoryR= () =>
  {
    dispatch({type: MEMORY_R});
  }

  const memoryC= () =>
  {
    dispatch({type: MEMORY_C});
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
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick = {() => memoryPlusClick()} value={"M+"}/>
              <CalcButton onClick = {() => memoryR()} value={"MR"}/>
              <CalcButton onClick = {() => memoryC()} value={"MC"}/>
            </div>

            <div className="row">
              {/* Apply the addOneClick to onClick  */}
              {/* <CalcButton onClick = {addOneClick} value={1}/> */}
              {/* Apply the applyNumberClick to onClick, pass in (1)  */}
              <CalcButton onClick = {() => applyNumberClick(1)} value={1}/>
              <CalcButton onClick = {() => applyNumberClick(2)} value={2}/>
              <CalcButton onClick = {() => applyNumberClick(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => applyNumberClick(4)} value={4}/>
              <CalcButton onClick = {() => applyNumberClick(5)} value={5}/>
              <CalcButton onClick = {() => applyNumberClick(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => applyNumberClick(7)} value={7}/>
              <CalcButton onClick = {() => applyNumberClick(8)} value={8}/>
              <CalcButton onClick = {() => applyNumberClick(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() =>  changeOperationsClick("+")} value={"+"}/>
              <CalcButton onClick = {() =>  changeOperationsClick("*")} value={"*"}/>
              <CalcButton onClick = {() =>  changeOperationsClick("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              {/* call ClearDisplayClick with null as argument  */}
              <CalcButton onClick = {() =>  clearDisplayClick(null)}value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
