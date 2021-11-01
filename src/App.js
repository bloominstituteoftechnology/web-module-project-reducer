import React, { useReducer } from 'react';
import { addOne, applyNumber, changeOperation, clearTotal, addMemory, memoryTotal, clearMemory } from './actions/index'
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  const handleCalculator = (number) => {
    dispatch(applyNumber(number))
  }
  const handleChangeOperation = (symbol) => {
    dispatch(changeOperation(symbol))
  }
  const handleClear = () => {
    dispatch(clearTotal())
  }
  const handleAddMemory = () => {
    dispatch(addMemory(state.total))
  }
  const handleMemoryTotal = () => {
    dispatch(memoryTotal(state.memory))
  }
  const handleMemoryClear = () => {
    dispatch(clearMemory())
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
              <CalcButton value={"M+"} onClick = {handleAddMemory}/>
              <CalcButton value={"MR"} onClick = {handleMemoryTotal}/>
              <CalcButton value={"MC"} onClick = {handleMemoryClear}/>
            </div>
            <div className="row">
              <CalcButton value={1} onClick = {() => {handleCalculator(1)}}/>
              <CalcButton value={2} onClick = {() => {handleCalculator(2)}}/>
              <CalcButton value={3} onClick = {() => {handleCalculator(3)}}/>
            </div>
            <div className="row">
              <CalcButton value={4}  onClick = {() => {handleCalculator(4)}}/>
              <CalcButton value={5} onClick = {() => {handleCalculator(5)}}/>
              <CalcButton value={6} onClick = {() => {handleCalculator(6)}}/>
            </div>
            <div className="row">
              <CalcButton value={7} onClick = {() => {handleCalculator(7)}}/>
              <CalcButton value={8} onClick = {() => {handleCalculator(8)}}/>
              <CalcButton value={9} onClick = {() => {handleCalculator(9)}}/>
            </div>
            <div className="row">
            <CalcButton value={"+"} onClick={() => {
                handleChangeOperation('+')
              }}/>
              <CalcButton value={"*"} onClick={() => {
                handleChangeOperation('*')
              }}/>
              <CalcButton value={"-"} onClick={() => {
                handleChangeOperation('-')
              }}/>
            </div>
            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {handleClear}/>
            </div>

          </form>
        </div>
      </div> 
    </div>
  );
}
export default App;