import React, { useReducer } from 'react'; 
import reducer, {initialState} from './reducers/index'
import { applyNumber, operationChanger, clearDisplay, memValue, valueMem, memZero } from './actions/index'
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const linkActions = (num) => {
    dispatch(applyNumber(num))
  }

  const operate = (op) => {
    dispatch(operationChanger(op))
  }
 
const [state, dispatch] = useReducer(reducer, initialState)
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
              <CalcButton value={"M+"} onClick={() => dispatch(memValue())} />
              <CalcButton value={"MR"} onClick={() => dispatch(valueMem())} />
              <CalcButton value={"MC"} onClick={() => dispatch(memZero())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => linkActions(1)} />
              <CalcButton value={2} onClick={() => linkActions(2)}  />
              <CalcButton value={3} onClick={() => linkActions(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => linkActions(4)} />
              <CalcButton value={5} onClick={() => linkActions(5)} />
              <CalcButton value={6} onClick={() => linkActions(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => linkActions(7)} />
              <CalcButton value={8} onClick={() => linkActions(8)} />
              <CalcButton value={9} onClick={() => linkActions(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operate('+')} />
              <CalcButton value={"*"} onClick={() => operate('*')} />
              <CalcButton value={"-"} onClick={() => operate('-')} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
