import React, { useReducer } from 'react';
import './App.css';
import reducer, { initialState } from '../reducers/index';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { applyNumber, changeOperator, clearDisplay, setTotalToMemory, applyMemory, memoryClear } from '../actions/index';


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)


  const numberClickHandler = (number) => {
    dispatch(applyNumber(number))
  }

  const operatorChangeHandler = (operator) => {
    dispatch(changeOperator(operator))
  }

  const getRidOfEverything = () => {
    dispatch(clearDisplay())
  }

  const memoryAdd = () => {
    dispatch(setTotalToMemory())
  }

  const memoryApplied = () => {
    dispatch(applyMemory())
  }

  const memCleared = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
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
              <CalcButton value={"M+"} onClick={memoryAdd}/>
              <CalcButton value={"MR"} onClick={memoryApplied}/>
              <CalcButton value={"MC"} onClick={memCleared}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => numberClickHandler(1)}/>
              <CalcButton value={2} onClick={() => numberClickHandler(2)}/>
              <CalcButton value={3} onClick={() => numberClickHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => numberClickHandler(4)}/>
              <CalcButton value={5} onClick={() => numberClickHandler(5)}/>
              <CalcButton value={6} onClick={() => numberClickHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => numberClickHandler(7)}/>
              <CalcButton value={8} onClick={() => numberClickHandler(8)}/>
              <CalcButton value={9} onClick={() => numberClickHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operatorChangeHandler('+')}/>
              <CalcButton value={"*"} onClick={() => operatorChangeHandler('*')}/>
              <CalcButton value={"-"} onClick={() => operatorChangeHandler('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={getRidOfEverything}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
