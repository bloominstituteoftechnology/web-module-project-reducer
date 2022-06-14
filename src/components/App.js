import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers';
import './App.css';
import * as actions from '../actions';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const onClick = (e) => {
    dispatch(actions.applyNumber(+e.target.value))
  } 

  const changeOperation = (e) => {
    dispatch(actions.changeOperation(e.target.value))
  }

  const clearDisplay = () => {
    dispatch(actions.clearDisplay())
  }

  const saveToMemory = () => {
    dispatch(actions.saveToMemory())
  }

  const applyFromMemory = () => {
    dispatch(actions.applyFromMemory())
  }

  const clearMemory = () => {
    dispatch(actions.clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
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
              <CalcButton value={"M+"} onClick={saveToMemory} />
              <CalcButton value={"MR"} onClick={applyFromMemory} />
              <CalcButton value={"MC"} onClick={clearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={onClick} />
              <CalcButton value={2} onClick={onClick} />
              <CalcButton value={3} onClick={onClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={onClick} />
              <CalcButton value={5} onClick={onClick} />
              <CalcButton value={6} onClick={onClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={onClick} />
              <CalcButton value={8} onClick={onClick} />
              <CalcButton value={9} onClick={onClick} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={changeOperation} />
              <CalcButton value={"*"} onClick={changeOperation} />
              <CalcButton value={"-"} onClick={changeOperation} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearDisplay} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
