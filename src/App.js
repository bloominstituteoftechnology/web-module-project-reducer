import React, {useReducer} from 'react';
import './App.css';
import reducer, { initialState } from './reducers';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } 
from './actions';
import { applyNumber, changeOperation, clearDisplay, holdMemory, memoryClear, memoryRecall } from './actions'

let currentState = initialState;

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  
  const handdleApplyNumber = (number) => {
    dispatch(applyNumber(number));
 }
 const handdleChangeOpp = (operation) => {
   dispatch(changeOperation(operation))
 }
 const handdleClearDisplay = () => {
   dispatch(clearDisplay());
 }
 const handdleHoldMemory = () => {
   dispatch(holdMemory());
 }
 const handdleMemoryClear = () => {
   dispatch(memoryClear());
 }
 const handdleMemoryRecall = () => {
   dispatch(memoryRecall());
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
              <CalcButton value={"M+"} onClick={() => {handdleHoldMemory()}}/>
              <CalcButton value={"MR"} onClick={() => {handdleMemoryRecall()}}/>
              <CalcButton value={"MC"} onClick={() => {handdleMemoryClear()}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handdleApplyNumber(1)} />
              <CalcButton value={2} onClick={() => handdleApplyNumber(2)}/>
              <CalcButton value={3} onClick={() => handdleApplyNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handdleApplyNumber(4)}/>
              <CalcButton value={5} onClick={() => handdleApplyNumber(5)}/>
              <CalcButton value={6} onClick={() => handdleApplyNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {handdleApplyNumber(7)}}/>
              <CalcButton value={8} onClick={() => {handdleApplyNumber(8)}}/>
              <CalcButton value={9} onClick={() => {handdleApplyNumber(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {
                handdleChangeOpp('+')
              }}/>
              <CalcButton value={"*"} onClick={() => {
                handdleChangeOpp('*')
              }}/>
              <CalcButton value={"-"} onClick={() => {
                handdleChangeOpp('-')
              }}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() =>{handdleClearDisplay()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
export default App;