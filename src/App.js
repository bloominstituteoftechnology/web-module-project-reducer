import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { applyNumber, changeOpeation, clearDisplay, clearMemory, changeMemory, recallMemory  } from './actions/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleApplyNumber = (digit) => {
    dispatch(applyNumber(digit))
  }

  const addOperation = () => {
    dispatch(changeOpeation('+'))
  } 

  const subtractOperation = () => {
    dispatch(changeOpeation('-'))
  } 

  const multiplyOperation = () => {
    dispatch(changeOpeation('*'))
  } 

  const handleClearOperation = () => {
    dispatch(clearDisplay())
  }

  const handleChangeMemory = () => {
    dispatch(changeMemory())
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }

  const handleRecallMemory = () => {
    dispatch(recallMemory())
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
              <span id="operation"><b>Operation:</b> {state.opetation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick = {handleChangeMemory}/>
              <CalcButton value={"MR"} onClick = {handleRecallMemory}/>
              <CalcButton value={"MC"} onClick = {handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1}onClick = {() => handleApplyNumber(1)}/>
              <CalcButton value={2}onClick = {() => handleApplyNumber(2)}/>
              <CalcButton value={3}onClick = {() => handleApplyNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4}onClick = {() => handleApplyNumber(4)}/>
              <CalcButton value={5}onClick = {() => handleApplyNumber(5)}/>
              <CalcButton value={6}onClick = {() => handleApplyNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7}onClick = {() => handleApplyNumber(7)}/>
              <CalcButton value={8}onClick = {() => handleApplyNumber(8)}/>
              <CalcButton value={9}onClick = {() => handleApplyNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = {addOperation}/>
              <CalcButton value={"*"} onClick = {multiplyOperation}/>
              <CalcButton value={"-"} onClick = {subtractOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {handleClearOperation}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
