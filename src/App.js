import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { addOne } from './reducer/index.js';
import { applyNumber, actionCreator, clearDisplay, CHANGE_OPERATION, APPLY_NUMBER } from './actions/index';



function App() {
  const[state, dispatch]= useReducer(reducer, initialState);
  console.log(state);
  // const handleClick (e) =>{
  //   console.log(e.target.value);
    // dispatch(addNumber(e.target.value));
  }

  

  // const handleAdd = () =>{
  //   dispatch(addOne());
  // }

  const handleChanges = (number) =>{
    console.log(number)
    dispatch(applyNumber(number));
  }

  const handleOperations = (operation) =>{
    console.log(operation);
    dispatch(changeOperation(operation));
  }

  const applyNumberDispatcher = (num) => {
    dispatch(applyNumber(num));
  }


const handleNum=(e)=>{
  state.operation===""?dispatch({payload:e}):dispatch({type:APPLY_NUMBER, payload:e});
}

const setOpp=(e)=>{
  dispatch({type:CHANGE_OPERATION,payload:e});
}  

const clear=()=>{
  dispatch({type:CLEAR});
}

const addM=()=>{
  dispatch({type:ADD_MEM});
}

const clearM=()=>{
  dispatch({type:CLEAR_MEM});
}

const recallM=()=>{
  dispatch({type:RECALL_M});
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
              <span id="memory"><b>Memory:</b> {state.memory} {state.total}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick ={applyNumberDispatcher(1)/>
              <CalcButton value={2} onClick={applyNumberDispatcher(2)/>
              <CalcButton value={3} onClick={applyNumberDispatcher(3)/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={applyNumberDispatcher(4)/>
              <CalcButton value={5} onClick={applyNumberDispatcher(5)/>
              <CalcButton value={6} onClick={applyNumberDispatcher(6)/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={applyNumberDispatcher(7)/>
              <CalcButton value={8} onClick={applyNumberDispatcher(8)/>
              <CalcButton value={9} onClick={applyNumberDispatcher(9)/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={actionCreator}/>
              <CalcButton value={"*"} onClick={actionCreator}/>
              <CalcButton value={"-"} onClick={actionCreator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
