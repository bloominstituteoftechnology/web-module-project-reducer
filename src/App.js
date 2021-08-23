// importing useReducer hook
import React, { useReducer } from 'react';
// importing app reducer & intialState
// when importing default exports, don't enclose in {}
import reducer, { initialState } from './reducers';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

// importing action creators
import { addOne, applyNumber, changeOperation } from './actions/index';

function App() {
// using useReducer hook to get access to the app state and the dispatch function
const [state, dispatch] = useReducer(reducer, initialState);


// ??? how is this connected to button 1
// const handleChangesButtonOne = () => {
//   dispatch(addOne());
// }

const eventHandler = (banana) => {
  dispatch(applyNumber(banana));
}

const additionEventHandler = () => {
  dispatch(changeOperation('+'));
  console.log(additionEventHandler);
}

const minusEventHandler = () => {
  dispatch(changeOperation('-'));
  console.log(additionEventHandler);
}

const multiplyEventHandler = () => {
  dispatch(changeOperation('*'));
  console.log(additionEventHandler);
}

// add additional operators
// add numbers

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
              <CalcButton value={1} onClick={() => eventHandler(1)}/>
              <CalcButton value={2} onClick={() => eventHandler(2)}/>
              <CalcButton value={3} onClick={() => 
              eventHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => 
              eventHandler(4)}/>
              <CalcButton value={5} onClick={() => 
                eventHandler(5)}/>
              <CalcButton value={6} onClick={() => 
                eventHandler(5)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => 
              eventHandler(7)}/>
              <CalcButton value={8} onClick={() => 
              eventHandler(8)}/>
              <CalcButton value={9} onClick={() => 
              eventHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={ additionEventHandler}/>
              <CalcButton value={"*"} onClick={multiplyEventHandler}/>
              <CalcButton value={"-"} onClick={minusEventHandler}/>
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
