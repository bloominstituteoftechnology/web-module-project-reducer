import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { applyNumber,
         changeOperation, 
         clearDisplay, 
         memoryAdd, 
         memoryRetrieve, 
         memoryClear 
        } from './actions/index';

function App() {
  const [ state, dispatch ] = useReducer( reducer, initialState );

  const handleNumber = ( num ) => {
    dispatch( applyNumber( num ));
  }

  const handleOperation = ( operator ) => {
    dispatch( changeOperation( operator ));
  }

  const handleClear = () => {
    dispatch( clearDisplay());
  }
  
  const handleMemoryAdd = ( total ) => {
    dispatch( memoryAdd( total ));
  }

  const handleMemoryRetrieve = ( memory ) => {
    dispatch( memoryRetrieve( memory ));
  }

  const handleMemoryClear = () => {
    dispatch( memoryClear() )
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={ state.total }/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{ state.operation }</span>
              <span id="memory"><b>Memory:</b>{ state.memory }</span>
            </div>
            
            <div className="row">
              <CalcButton onClick = { () => { handleMemoryAdd( state.total ) }} value={"M+"}/>
              <CalcButton onClick = { () => { handleMemoryRetrieve( state.memory ) }} value={"MR"}/>
              <CalcButton onClick = { handleMemoryClear } value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick = { () => { handleNumber(1) }} value={1}/>
              <CalcButton onClick = { () => { handleNumber(2) }} value={2}/>
              <CalcButton onClick = { () => { handleNumber(3) }} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick = { () => { handleNumber(4) }} value={4}/>
              <CalcButton onClick = { () => { handleNumber(5) }} value={5}/>
              <CalcButton onClick = { () => { handleNumber(6) }} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick = { () => { handleNumber(7) }} value={7}/>
              <CalcButton onClick = { () => { handleNumber(8) }} value={8}/>
              <CalcButton onClick = { () => { handleNumber(9) }} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = { () => { handleOperation('+') }} value={"+"}/>
              <CalcButton onClick = { () => { handleOperation('*') }} value={"*"}/>
              <CalcButton onClick = { () => { handleOperation('-') }} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = { handleClear } value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
