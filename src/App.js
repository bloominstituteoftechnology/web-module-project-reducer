import React, { useReducer } from 'react';
import reducer, { initialState} from './reducers/index';
import './App.css';
import { addOne,applyNumber, changeOperation, clearDisplay,addToMemoryAction,addMem,clearMem } from './actions';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state)

  
  //const handleAddClick = ()=> {
  //  dispatch(addOne());
  //}
  const handleApplyClick = (e) => {
    const num = parseInt(e.target.textContent)
    dispatch(applyNumber(num));
  }

  const handleOperClick = (e) => {
    console.log('e.target.textContent', e.target.textContent)
    dispatch(changeOperation(e.target.textContent))
  }
  const handleClearClick = () => {
      dispatch(clearDisplay());
    }

  const handleMemClick = () => {
    dispatch(addToMemoryAction());
  }

const handleAddMem = () => {
  dispatch(addMem())
}

const handleClearMem = () => {
  dispatch(clearMem());
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span value={state.operation} id="operation"><b>Operation:</b>{state.operation}</span>
              <span value={state.memory} id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton  onClick={handleMemClick} value={"M+"}/>
              <CalcButton onClick={handleAddMem} value={"MR"}/>
              <CalcButton onClick={handleClearMem} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyClick} value={1}/>
              <CalcButton onClick={handleApplyClick} value={2}/>
              <CalcButton onClick={handleApplyClick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyClick} value={4}/>
              <CalcButton onClick={handleApplyClick} value={5}/>
              <CalcButton onClick={handleApplyClick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyClick} value={7}/>
              <CalcButton onClick={handleApplyClick} value={8}/>
              <CalcButton onClick={handleApplyClick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleOperClick} value={"+"}/>
              <CalcButton onClick={handleOperClick} value={"*"}/>
              <CalcButton onClick={handleOperClick} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton  onClick={handleClearClick} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
