
//Imports
import React, {useReducer} from 'react';
import './App.css';
import reducer, {initialState} from "./reducers/index"
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { ADD_ONE, applyNumber,CHANGE_OPERATION } from './actions';


function App() 
{
  //Initial state, useReducer init to reducer() and initialState
  const[state, dispatch] = useReducer(reducer, initialState);

  console.log(">>>>>", initialState, "<<<<");
  console.log(">>>", state, "<<<");
  //Handler functions

  //Add One handler
  const addOneClick = (numnum) =>
  {
    //Call dispatch function, pass addOne from Reducers/Index
    dispatch({type: ADD_ONE, payload: numnum}); 
    console.log(">>>>>NUM1", initialState, "<<<<");
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              {/* Apply the addOneClick to onClick  */}
              <CalcButton onClick = {addOneClick} value={1}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
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
