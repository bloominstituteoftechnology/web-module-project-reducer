import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';
import { addOne , applyNumber, changeOperation, clearDisplay, recordMemory, clearMemory, recallMemory} from './actions/index';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('state = ',state,'dispatch = ', dispatch)

  const eventHandler = (number) => {dispatch(applyNumber(number))};
  const operatorHandler = (operator) => {dispatch(changeOperation(operator))};


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
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(recordMemory())}/>
              <CalcButton value={"MR"} onClick={() => dispatch(recallMemory())}/>
              <CalcButton value={"MC"} onClick={() => dispatch(clearMemory())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => eventHandler(1)}/>
              <CalcButton value={2} onClick={() => eventHandler(2)}/>
              <CalcButton value={3} onClick={() => eventHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => eventHandler(4)}/>
              <CalcButton value={5} onClick={() => eventHandler(5)}/>
              <CalcButton value={6} onClick={() => eventHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => eventHandler(7)}/>
              <CalcButton value={8} onClick={() => eventHandler(8)}/>
              <CalcButton value={9} onClick={() => eventHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operatorHandler('+')}/>
              <CalcButton value={"*"} onClick={() => operatorHandler('*')}/>
              <CalcButton value={"-"} onClick={() => operatorHandler('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
