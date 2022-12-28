import React, { useReducer} from 'react';
import reducer, {initialState}  from "../reducers"
import './App.css';
import { applyNumber,changeOperation,clearDisplay,memoryPlus, mr,memoryClear} from '../actions';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const eventhandleNum = (e) => {
    dispatch(applyNumber(parseInt(e.target.value)))
  }
  const eventhandlerOp = (e) => {
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
              <CalcButton value={"M+"} onClick={()=> dispatch(memoryPlus())}/>
              <CalcButton value={"MR"}onClick={()=> dispatch(mr())}/>
              <CalcButton value={"MC"}onClick={()=> dispatch(memoryClear())}/>
            </div>

            <div className="row">
              <CalcButton value={1}onClick={(e)=> eventhandleNum(e)}/>
              <CalcButton value={2}onClick={(e)=> eventhandleNum(e)}/>
              <CalcButton value={3}onClick={(e)=> eventhandleNum(e)}/>
            </div>

            <div className="row">
              <CalcButton value={4}onClick={(e)=> eventhandleNum(e)}/>
              <CalcButton value={5}onClick={(e)=> eventhandleNum(e)}/>
              <CalcButton value={6}onClick={(e)=> eventhandleNum(e)}/>
            </div>

            <div className="row">
              <CalcButton value={7}onClick={(e)=> eventhandleNum(e)}/>
              <CalcButton value={8}onClick={(e)=> eventhandleNum(e)}/>
              <CalcButton value={9}onClick={(e)=> eventhandleNum(e)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}onClick={(e)=> eventhandlerOp(e)}/>
              <CalcButton value={"*"}onClick={(e)=> eventhandlerOp(e)}/>
              <CalcButton value={"-"}onClick={(e)=> eventhandlerOp(e)}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}onClick={()=> dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
