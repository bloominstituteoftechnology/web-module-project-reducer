import React from 'react';
import { useReducer } from 'react';
import './App.css';
import reducer, {initialState} from '../reducers'
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { applyNumber,
   changeOperation,
    clearDisplay,
    memoryPlus,
    mr,
    memoryClear
   } from '../actions';

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)

  const eventHandlerNum = (e) => {
      dispatch(applyNumber(parseInt(e.target.value)))
  }

  const eventHandlerOp = (e) => {
    dispatch(changeOperation(e.target.value))
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
              <span id="operation"><b>Operation:</b> {`${state.operation}`}</span>
              <span id="memory"><b>Memory:</b> {`${state.memory}`}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(memoryPlus())}/>
              <CalcButton value={"MR"} onClick={() => dispatch(mr())}/>
              <CalcButton value={"MC"} onClick={() => dispatch(memoryClear())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => eventHandlerNum(e)}/>
              <CalcButton value={2} onClick={(e) => eventHandlerNum(e)}/>
              <CalcButton value={3} onClick={(e) => eventHandlerNum(e)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e) => eventHandlerNum(e)}/>
              <CalcButton value={5} onClick={(e) => eventHandlerNum(e)}/>
              <CalcButton value={6} onClick={(e) => eventHandlerNum(e)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => eventHandlerNum(e)}/>
              <CalcButton value={8} onClick={(e) => eventHandlerNum(e)}/>
              <CalcButton value={9} onClick={(e) => eventHandlerNum(e)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(e) => eventHandlerOp(e)}/>
              <CalcButton value={"*"} onClick={(e) => eventHandlerOp(e)}/>
              <CalcButton value={"-"} onClick={(e) => eventHandlerOp(e)}/>
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
