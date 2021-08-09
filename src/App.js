import React, { useReducer } from 'react';
import reducer, {initialState} from './reducers/index';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import {addOne, applyNumber, changeOperation, clearDisplay, setMemoryTotatl, applyMemoryTotal, setMemoryZero} from './actions/index'


function App() {

  const [state, dispatch ] = useReducer(reducer, initialState)

  // const handleAddClick = () =>{
  //   dispatch(addOne(1))
  // }

  const handleApplyClickOne = () =>{
    dispatch(applyNumber(1))
  }
  const handleApplyClickTwo = () =>{
    dispatch(applyNumber(2))
  }
  const handleApplyClickThree = () =>{
    dispatch(applyNumber(3))
  }
  const handleApplyClickFour = () =>{
    dispatch(applyNumber(4))
  }
  const handleApplyClickFive = () =>{
    dispatch(applyNumber(5))
  }
  const handleApplyClickSix = () =>{
    dispatch(applyNumber(6))
  }
  const handleApplyClickSeven = () =>{
    dispatch(applyNumber(7))
  }
  const handleApplyClickEight = () =>{
    dispatch(applyNumber(8))
  }
  const handleApplyClickNine = () =>{
    dispatch(applyNumber(9))
  }
 
  const handleOperationAddClick = () =>{
    dispatch(changeOperation('+'))
  }

  const handleOperationMultiplyClick = () =>{
    dispatch(changeOperation('*'))
  }

  const handleOperationSubClick = () =>{
    dispatch(changeOperation('-'))
  }

  const handleClearClick= () => {
    dispatch(clearDisplay())
  }

  const handleSetMemoryClick = () =>{
    dispatch(setMemoryTotatl())
  }

  const handleApplyMemoryClick = () =>{
    dispatch(applyMemoryTotal())
  }

  const handleClearMemoryClick = () =>{
    dispatch(setMemoryZero())
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
              <CalcButton onClick = {handleSetMemoryClick}value={"M+"}/>
              <CalcButton onClick = {handleApplyMemoryClick}value={"MR"}/>
              <CalcButton onClick = {handleClearMemoryClick}value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleApplyClickOne}value={1}/>
              <CalcButton onClick = {handleApplyClickTwo}value={2}/>
              <CalcButton onClick = {handleApplyClickThree}value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleApplyClickFour}value={4}/>
              <CalcButton onClick = {handleApplyClickFive}value={5}/>
              <CalcButton onClick = {handleApplyClickSix}value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleApplyClickSeven}value={7}/>
              <CalcButton onClick = {handleApplyClickEight}value={8}/>
              <CalcButton onClick = {handleApplyClickNine}value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleOperationAddClick}value={"+"}/>
              <CalcButton onClick = {handleOperationMultiplyClick}value={"*"}/>
              <CalcButton onClick = {handleOperationSubClick}value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = {handleClearClick}value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
