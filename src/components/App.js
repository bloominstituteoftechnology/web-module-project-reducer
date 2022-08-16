import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/index'
import {
  addOne,
  applyNumber,
  changeOperation,
  clearCalc,
  setMPlus,
  setMR,
  setMC
} from '../actions/index'

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const showNumber = (num) => {
    dispatch(applyNumber(num))
  }

  const changeOperator = (string) => {
    dispatch(changeOperation(string))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(setMPlus())} value={"M+"} />
              <CalcButton onClick={() => dispatch(setMR())} value={"MR"} />
              <CalcButton onClick={() => dispatch(setMC())} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => showNumber(1)} value={1} />
              <CalcButton onClick={() => showNumber(2)} value={2} />
              <CalcButton onClick={() => showNumber(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => showNumber(4)} value={4} />
              <CalcButton onClick={() => showNumber(5)} value={5} />
              <CalcButton onClick={() => showNumber(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => showNumber(7)} value={7} />
              <CalcButton onClick={() => showNumber(8)} value={8} />
              <CalcButton onClick={() => showNumber(9)} value={9} />
            </div>

            {/* <div className="row">
              <CalcButton onClick={()=>dispatch(changeOperation('+'))} value={"+"}/>
              <CalcButton onClick={()=>dispatch(changeOperation('*'))} value={"*"}/>
              <CalcButton onClick={()=>dispatch(changeOperation('-'))} value={"-"}/>
            </div> */}

            <div className="row">
              <CalcButton onClick={() => changeOperator("+")} value={"+"} />
              <CalcButton onClick={() => changeOperator("*")} value={"*"} />
              <CalcButton onClick={() => changeOperator("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => dispatch(clearCalc())} value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
