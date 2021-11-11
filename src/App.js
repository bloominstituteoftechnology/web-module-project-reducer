import reducer, { initialState} from './reducers'
import React, {useReducer } from 'react';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import {applyNumber, changeOperation, clearDisplay,
        currentMemory, recallMemory, clearMemory } from "./actions/index"


function App() {
  const [state, dispatch] = useReducer(reducer, initialState); 
  
   const handleApplyNumberClick = (number)=> {
     dispatch(applyNumber(number));
   }

   const handleChangeOperationAdd = ()=> {
     dispatch(changeOperation ("+"));
   }

   const handleChangeOperationSub = ()=> {
    dispatch(changeOperation ("-"));
  }

  const handleChangeOperationMult = ()=> {
    dispatch(changeOperation ("*"));
  }

  const handleClearDisplay = ()=> {
    dispatch(clearDisplay ("0"));

  }

  const handleCurrentMemory = () => {
    dispatch(currentMemory())
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }
  
  const handleRecallMemory = () => {
    dispatch(recallMemory())
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
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleCurrentMemory} value={"M+"}/>
              <CalcButton onClick={handleRecallMemory} value={"MR"}/>
              <CalcButton onClick={handleClearMemory} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()  => handleApplyNumberClick(1)} value={1}/>
              <CalcButton onClick={()  => handleApplyNumberClick(2)} value={2}/>
              <CalcButton onClick={()  => handleApplyNumberClick(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()  => handleApplyNumberClick(4)} value={4}/>
              <CalcButton onClick={()  => handleApplyNumberClick(5)} value={5}/>
              <CalcButton onClick={()  => handleApplyNumberClick(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()  => handleApplyNumberClick(7)} value={7}/>
              <CalcButton onClick={()  => handleApplyNumberClick(8)} value={8}/>
              <CalcButton onClick={()  => handleApplyNumberClick(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleChangeOperationAdd} value={"+"}/>
              <CalcButton onClick={handleChangeOperationMult} value={"*"}/>
              <CalcButton onClick={handleChangeOperationSub} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClearDisplay} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
