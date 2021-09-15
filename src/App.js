import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import './App.css';
import { applyNumber, changeOperation, clearDisplay } from './actions/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state);

  const handleClickNumber = (number) => {
    dispatch(applyNumber(number))
  }
  const handleAddOperation = () => {
    dispatch(changeOperation('+'))
  }
  const handleSubtractOperation = () => {
    dispatch(changeOperation('-'))
  }
  const handleMultiplyOperation = () => {
    dispatch(changeOperation('*'))
  }
  const handleClearOperation = () => {
    dispatch(clearDisplay())
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
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleClickNumber(1)}/>
              <CalcButton value={2} onClick={() => handleClickNumber(2)}/>
              <CalcButton value={3} onClick={() => handleClickNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleClickNumber(4)}/>
              <CalcButton value={5} onClick={() => handleClickNumber(5)}/>
              <CalcButton value={6} onClick={() => handleClickNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleClickNumber(7)}/>
              <CalcButton value={8} onClick={() => handleClickNumber(8)}/>
              <CalcButton value={9} onClick={() => handleClickNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleAddOperation}/>
              <CalcButton value={"*"} onClick={handleMultiplyOperation}/>
              <CalcButton value={"-"} onClick={handleSubtractOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearOperation}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
