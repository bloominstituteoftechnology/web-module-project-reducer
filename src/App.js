import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index';
import './App.css';
import { addOne, applyNumber, changeOperation, clearDisplay, changeMemory } from './actions/index';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleMemory = (e) => {
    console.log("dispatch changeMemory action");
    const memoryOperator = e.target.value;
    dispatch(changeMemory(memoryOperator));
  }

  const handleClick = (e) => {
    console.log("dispatch changeMemory action")
    dispatch(applyNumber(e.target.value));
  };

  const handleChangeOperator = (e) => {
    console.log("dispatch changeOperator action")
    const operator = e.target.value;
    dispatch(changeOperation(operator));
  }

  const handleClearDisplay = (e) => {
    console.log("dispatch clearDisplay action")
    dispatch(clearDisplay());
  }



  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            {console.log("state.total: ", state.total)}
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemory}/>
              <CalcButton value={"MR"} onClick={handleMemory}/>
              <CalcButton value={"MC"} onClick={handleMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} 
              onClick={handleClick}
              />
              <CalcButton value={2}  onClick={handleClick}/>
              <CalcButton value={3}  onClick={handleClick}/>
            </div>

            <div className="row">
              <CalcButton value={4}  onClick={handleClick}/>
              <CalcButton value={5}  onClick={handleClick}/>
              <CalcButton value={6}  onClick={handleClick}/>
            </div>

            <div className="row">
              <CalcButton value={7}  onClick={handleClick}/>
              <CalcButton value={8}  onClick={handleClick}/>
              <CalcButton value={9}  onClick={handleClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleChangeOperator}/>
              <CalcButton value={"*"} onClick={handleChangeOperator}/>
              <CalcButton value={"-"} onClick={handleChangeOperator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
