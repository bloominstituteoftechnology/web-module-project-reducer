import React, { useReducer } from 'react';
import { initialState } from './reducers';
import reducer from './reducers';
import './App.css';
import { addOne } from './actions';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { applyNumber } from './actions';
import { changeOperation } from './actions';
import { clearDisplay } from './actions';
import { changeMemoryMplus } from './actions';
import { changeMemoryMR } from './actions';
import { clearMemory } from './actions';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const eventHandler = (number) => {
    return dispatch(applyNumber(number));
  }

const operationHandler = (operation) => {
  return dispatch(changeOperation(operation));
}

const clearDisplayHandler = () => {
  return dispatch(clearDisplay());
}

const memoryHandlerPlus = () => {
  return dispatch(changeMemoryMplus())
}

const memoryHandlerR = () => {
  return dispatch(changeMemoryMR())
}

const clearMemoryHandler = () => {
  return dispatch(clearMemory())
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
              <CalcButton value={"M+"} onClick={memoryHandlerPlus}/>
              <CalcButton value={"MR"} onClick={memoryHandlerR}/>
              <CalcButton value={"MC"} onClick={clearMemoryHandler}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(event)=>eventHandler(1)}/>
              <CalcButton value={2} onClick={(event)=>eventHandler(2)}/>
              <CalcButton value={3} onClick={(event)=>eventHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(event)=>eventHandler(4)}/>
              <CalcButton value={5} onClick={(event)=>eventHandler(5)}/>
              <CalcButton value={6} onClick={(event)=>eventHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(event)=>eventHandler(7)}/>
              <CalcButton value={8} onClick={(event)=>eventHandler(8)}/>
              <CalcButton value={9} onClick={(event)=>eventHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(event)=>operationHandler('+')}/>
              <CalcButton value={"*"} onClick={(event)=>operationHandler('*')}/>
              <CalcButton value={"-"} onClick={(event)=>operationHandler('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearDisplayHandler}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
