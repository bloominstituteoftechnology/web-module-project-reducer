import React, {useReducer} from 'react';
import reducer,{ initialState } from './reducers/index';

import { applyNumber, changeOperation, clearDisplay } from './actions';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleApplyNumber1 = () => {
      dispatch(applyNumber(1))
    }

    const handleApplyNumber2 = () => {
      dispatch(applyNumber(2))
    }

    const handleApplyNumber3 = () => {
      dispatch(applyNumber(3))
    }

    const handleApplyNumber4 = () => {
      dispatch(applyNumber(4))
    }

    const handleApplyNumber5 = () => {
      dispatch(applyNumber(5))
    }

    const handleApplyNumber6 = () => {
      dispatch(applyNumber(6))
    }

    const handleApplyNumber7 = () => {
      dispatch(applyNumber(7))
    }

    const handleApplyNumber8 = () => {
      dispatch(applyNumber(8))
    }

    const handleApplyNumber9 = () => {
      dispatch(applyNumber(9))
    }

    const handleAddClick = () => {
      dispatch(changeOperation('+'))
    }

    const handleMultiplyClick = () => {
      dispatch(changeOperation('*'))
    }

    const handleSubtractClick = () => {
      dispatch(changeOperation('-'))
    }

    const handleClearDisplay = () => {
      dispatch(clearDisplay());
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleApplyNumber1} value={1}/>
              <CalcButton onClick = {handleApplyNumber2} value={2}/>
              <CalcButton onClick = {handleApplyNumber3} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleApplyNumber4} value={4}/>
              <CalcButton onClick = {handleApplyNumber5} value={5}/>
              <CalcButton onClick = {handleApplyNumber6} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleApplyNumber7} value={7}/>
              <CalcButton onClick = {handleApplyNumber8} value={8}/>
              <CalcButton onClick = {handleApplyNumber9} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {handleAddClick} value={"+"}/>
              <CalcButton onClick = {handleMultiplyClick} value={"*"}/>
              <CalcButton onClick = {handleSubtractClick} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = {handleClearDisplay} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}


