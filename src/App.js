import React, { useReducer, useState } from 'react';
import reducer, { initialState, calculateResult} from './reducers';
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { addOne, applyNumber, changeOperation, clearDisplay } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, dispatch)

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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton
                value={1}
                // onClick={() => dispatch(addOne(1))}
                onClick={() => dispatch(applyNumber(state.total, 1, state.operation))}
              />
              <CalcButton
                value={2}
                onClick={() => dispatch(applyNumber(state.total, 2, state.operation))}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
              onClick={() => dispatch(changeOperation('+'))}/>
              <CalcButton
                value={"*"}
                onClick={() => dispatch(changeOperation('*'))}/>
              <CalcButton
                value={"-"}
                onClick={() => dispatch(changeOperation('-'))}/>
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch({ clearDisplay })}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
