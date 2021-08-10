import React, { useReducer} from 'react';
import reducer, { initialState } from './reducers';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { 
  addMemory, 
  applyNumber, 
  changeOperation, 
  clearDisplay, 
  imposeMemory,
  clearMemory 
} from '../src/actions/index';

function App() {
  // console.log(initialState);
  const [state, dispatch ] = useReducer(reducer, initialState);
  console.log(state);

  // const handleAddOneClick = e => {
  //   dispatch(addOne());
  // }

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number));
  }

  const handleOperationClick = (operator) => {
      // console.log('Handle operation click');
      dispatch(changeOperation(operator));
  }

  const handleClearClick = () => {
    dispatch(clearDisplay());
  }

  const handleAddMemroy = () => {
    dispatch(addMemory())
  }

  const handleIposeMemory = () => {
    console.log('Impose Memory');
    dispatch(imposeMemory());
  }

  const handleClearMemory = () => {
    console.log('Clear Memory here');
    dispatch(clearMemory());
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" alt=''/> Lambda Reducer Challenge</a> */}
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
              <CalcButton value={"M+"} onClick={()=> {handleAddMemroy()}} />
              <CalcButton value={"MR"} onClick={()=> {handleIposeMemory()}} />
              <CalcButton value={"MC"} onClick={()=> {handleClearMemory()}} />
            </div>

            <div className="row">
              {/* <CalcButton value={1} onClick={handleAddOneClick}/> */}
              <CalcButton value={1} onClick={()=> {handleNumberClick(1)}}/>
              <CalcButton value={2} onClick={()=> {handleNumberClick(2)}}/>
              <CalcButton value={3} onClick={()=> {handleNumberClick(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> {handleNumberClick(4)}}/>
              <CalcButton value={5} onClick={()=> {handleNumberClick(5)}}/>
              <CalcButton value={6} onClick={()=> {handleNumberClick(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> {handleNumberClick(7)}}/>
              <CalcButton value={8} onClick={()=> {handleNumberClick(8)}}/>
              <CalcButton value={9} onClick={()=> {handleNumberClick(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> {handleOperationClick("+")}} />
              <CalcButton value={"*"} onClick={()=> {handleOperationClick("*")}} />
              <CalcButton value={"-"} onClick={()=> {handleOperationClick("-")}} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearClick}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
