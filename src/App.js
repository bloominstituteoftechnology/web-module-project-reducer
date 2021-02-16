import React, {useReducer } from 'react';
import {applyNumber,changeOperation } from "./actions/index"
import reducer, {initialState,CHANGE_OPERATION} from './reducers/index';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state,dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const onClick = (number) =>{
    dispatch(applyNumber(number))
  }
  const changeClick = () =>{
    dispatch(changeOperation())
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
              <span id="operation"> <b>Operation:{state.operation}</b> </span>
              <span id="memory"><b>Memory:{state.memory}</b> </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => onClick(1)} value={1}/>
              <CalcButton onClick={() => onClick(2) } value={2}/>
              <CalcButton onClick = {()=> onClick(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=> onClick(4)} value={4}/>
              <CalcButton  onClick={()=> onClick(5)} value ={5}/>
              <CalcButton onClick = {()=> onClick(6) } value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => onClick(7) } value={7}/>
              <CalcButton onClick={() => onClick(8)}  value={8}/>
              <CalcButton onClick={() => onClick(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => changeClick("+")} value={"+"}/>
              <CalcButton onClick={() => changeClick("*")} value={"*"}/>
              <CalcButton onClick={() => changeClick("-")} value={"-"}/>
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
