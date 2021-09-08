import React, { useReducer }  from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, {initialState} from './reducers'
import { addOne, applyNumber, changeOp, clearDisplay, setMemory, applyMemory, clearMemory } from './actions';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNum = (e) =>{
    const num = parseInt(e.target.innerText)
    e.preventDefault()
    dispatch(applyNumber(num))
  }

  const handleOp = (e) =>{
    const op = e.target.innerText
    e.preventDefault()
    dispatch(changeOp(op))
  }

  const handleClear = (e) =>{
    e.preventDefault()
    dispatch(clearDisplay())
  }

  const handleM = (e) =>{
    e.preventDefault()
    dispatch(setMemory())
  }

  const handleApplyM = (e) =>{
    e.preventDefault()
    dispatch(applyMemory())
  }

  const handleClearM = (e) =>{
    e.preventDefault()
    dispatch(clearMemory())
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
              <CalcButton value={"M+"} onClick={handleM} />
              <CalcButton value={"MR"} onClick={handleApplyM}/>
              <CalcButton value={"MC"} onClick={handleClearM}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNum}/>
              <CalcButton value={2} onClick={handleNum}/>
              <CalcButton value={3} onClick={handleNum}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNum}/>
              <CalcButton value={5} onClick={handleNum}/>
              <CalcButton value={6} onClick={handleNum}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNum}/>
              <CalcButton value={8} onClick={handleNum}/>
              <CalcButton value={9} onClick={handleNum}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOp}/>
              <CalcButton value={"*"} onClick={handleOp}/>
              <CalcButton value={"-"} onClick={handleOp}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
