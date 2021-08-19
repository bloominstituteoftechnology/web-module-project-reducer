import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import { applyNumber, changeOperation, clearDisplay, memoryTotal, memoryRecall, memoryClear } from './actions/index.js'
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const eventHandler = (e) => {
    dispatch(applyNumber(e))
  }

  const displayHandler = (e) => {
    dispatch(clearDisplay(e))
  }

  const memoryTotalHandler = () => {
    dispatch(memoryTotal())
  }

  const memoryRecallHandler = () => {
    dispatch(memoryRecall())
  }

  const memoryClearHandler = () => {
    dispatch(memoryClear())
  }

  const addOperator = () => {
    dispatch(changeOperation('+'))
  }

  const multiplyOperator = () => {
    dispatch(changeOperation('*'))
  }

  const subtractOperator = () => {
    dispatch(changeOperation('-'))
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
              <CalcButton onClick={memoryTotalHandler} value={"M+"}/>
              <CalcButton onClick={memoryRecallHandler} value={"MR"}/>
              <CalcButton onClick={memoryClearHandler} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandler(1)} value={1}/>
              <CalcButton onClick={() => eventHandler(2)} value={2}/>
              <CalcButton onClick={() => eventHandler(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandler(4)} value={4}/>
              <CalcButton onClick={() => eventHandler(5)} value={5}/>
              <CalcButton onClick={() => eventHandler(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => eventHandler(7)} value={7}/>
              <CalcButton onClick={() => eventHandler(8)} value={8}/>
              <CalcButton onClick={() => eventHandler(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={addOperator} value={"+"}/>
              <CalcButton onClick={multiplyOperator} value={"*"}/>
              <CalcButton onClick={subtractOperator} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={displayHandler} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
