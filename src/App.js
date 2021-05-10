import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';

import { applyNumber, changeOperation, clearDisplay, currentMemory, totalMemory, clearMemory } from './actions';
//onClick={() => dispatch(addOne())}
//onClick=(e) => {e.target.value}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = (num) => {
    const number = parseFloat(num.target.outerText)
    dispatch(applyNumber(number));
    //console.log('num', number);
  }

  const handleOperatorClick = (op) => {
    dispatch(changeOperation(op.target.outerText));
  }
  
  const handleClear = () => {
    dispatch(clearDisplay());
  }
  
  const handleMemory = (mem) => {
    dispatch(currentMemory(mem.target.outerText));
  }
  const handleMemoryClear = () => {
    dispatch(clearMemory());
  }
  const handleTotalMemory = (mem) => {
    dispatch(totalMemory(mem.target.outerText));
  }

  console.log(state);

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
              <CalcButton onClick={handleMemory} value={"M+"}/>
              <CalcButton onClick={handleTotalMemory} value={"MR"}/>
              <CalcButton onClick={handleMemoryClear} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={1}/>
              <CalcButton onClick={handleClick} value={2}/>
              <CalcButton onClick={handleClick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={4}/>
              <CalcButton onClick={handleClick} value={5}/>
              <CalcButton onClick={handleClick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={7}/>
              <CalcButton onClick={handleClick} value={8}/>
              <CalcButton onClick={handleClick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleOperatorClick} value={"+"}/>
              <CalcButton onClick={handleOperatorClick} value={"*"}/>
              <CalcButton onClick={handleOperatorClick} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
