import React,{ useReducer } from 'react';
import reducer, {initialState} from "./reducers/index"
import {changeOperation, applyNumber, clearDisplay, clearMemory,recallMemory, currentMemory  } from "./actions/index"

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleClickApplyNumber = (number) => {
    dispatch(applyNumber(number))
  }
  const handleClickChangeAdd = () => {
    dispatch(changeOperation('+'))
  }
  const handleClickChangeMulti = () => {
    dispatch(changeOperation('*'))
  }
  const handleClickChangeSubtract = () => {
    dispatch(changeOperation('-'))
  }
  const handleClickClear = () => {
    dispatch(clearDisplay())
  }
  const handleCurrentMemory = () => {
    dispatch(currentMemory())
  }
  const handleRecallMemory = () => {
    dispatch(recallMemory())
  }
  const handleClearMemory = () => {
    dispatch( clearMemory())
    
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
              <CalcButton onClick={handleCurrentMemory} value={"M+"}/>
              <CalcButton onClick={handleRecallMemory} value={"MR"}/>
              <CalcButton onClick={handleClearMemory} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClickApplyNumber(1)} value={1} />
              <CalcButton onClick={() => handleClickApplyNumber(2)}value={2}/>
              <CalcButton onClick={() => handleClickApplyNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClickApplyNumber(4)}value={4}/>
              <CalcButton onClick={() => handleClickApplyNumber(5)}value={5}/>
              <CalcButton onClick={() => handleClickApplyNumber(6)}value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClickApplyNumber(7)}value={7}/>
              <CalcButton onClick={() => handleClickApplyNumber(8)}value={8}/>
              <CalcButton onClick={() => handleClickApplyNumber(9)}value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClickChangeAdd
('+')} value={"+"}/>
              <CalcButton onClick={() => handleClickChangeMulti
('*')} value={"*"}/>
              <CalcButton onClick={() => handleClickChangeSubtract
('-')} value={"-"}/>
            </div>
            <div className="row ce_button">
              <CalcButton onClick={handleClickClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
