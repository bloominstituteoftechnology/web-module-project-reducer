import React, { useReducer } from 'react';
import reducer, { initialState} from "./reducers/index"
import { applyNumber, changeOperator } from "./actions/index"

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAdd = () => {
  //   console.log("clicked")
  //   dispatch(addOne())
  // }

  const handleTap = (e) => {
    const value = Number(e.target.textContent);
    dispatch(applyNumber(value))
  }

  const toggleOperator = (e) => {
    const value=e.target.textContent;
    dispatch(changeOperator(value))
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleTap}/>
              <CalcButton value={2} onClick={handleTap}/>
              <CalcButton onClick={handleTap} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleTap} value={4}/>
              <CalcButton onClick={handleTap} value={5}/>
              <CalcButton onClick={handleTap} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleTap} value={7}/>
              <CalcButton onClick={handleTap} value={8}/>
              <CalcButton onClick={handleTap} value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={toggleOperator}/>
              <CalcButton value={"*"} onClick={toggleOperator}/>
              <CalcButton value={"-"} onClick={toggleOperator}/>
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
