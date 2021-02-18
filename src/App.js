import React, { useReducer } from "react";
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, {initialState} from './reducers/index'
import { applyNumber, changeOperation, clearDisplay, addToMemory } from './actions/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const handleCalc = (number) => {
    dispatch(applyNumber(number));
  }

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  const handleAddToMemory = () => {
    dispatch(addToMemory())
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
              <CalcButton onClick={handleAddToMemory} value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleCalc(1)} value={1}/>
              <CalcButton onClick={() => handleCalc(2)} value={2}/>
              <CalcButton onClick={() => handleCalc(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleCalc(4)} value={4}/>
              <CalcButton onClick={() => handleCalc(5)} value={5}/>
              <CalcButton onClick={() => handleCalc(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleCalc(7)} value={7}/>
              <CalcButton onClick={() => handleCalc(8)} value={8}/>
              <CalcButton onClick={() => handleCalc(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperation('+')}  value={"+"}/>
              <CalcButton onClick={() => handleOperation('*')} value={"*"}/>
              <CalcButton onClick={() => handleOperation('-')} value={"-"}/>
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
