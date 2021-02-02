import {useReducer} from 'react';
import reducer, {initialState} from './reducers';

import './App.css';

import AnswerDisplay from './components/AnswerDisplay';
import CalcButton from './components/CalcButton';

import {applyNumber, changeOperation, clearDisplay, addMemory, clearMemory, recallMemory} from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (number)=>{
    dispatch(applyNumber(number));
  };

  const handlePlusClick = () => {
    dispatch(changeOperation("+"));
  }

  const handleMultiplyClick = () => {
    dispatch(changeOperation("*"));
  }

  const handleMinusClick = () => {
    dispatch(changeOperation("-"));
  }

  const handleClearClick = () => {
    dispatch(clearDisplay());
  }

  const handleAddMemory = () => {
    dispatch(addMemory());
  }

  const handleRecallMemory = () => {
    dispatch(recallMemory());
  }

  const handleClearMemory = () => {
    dispatch(clearMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="50px" src="https://fearlesssalarynegotiation.com/images/lambda_logo.png"/> Lambda Reducer Calculator</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <AnswerDisplay value={state.total}/>
            <div className="row details">
              <span><b>Operation:</b> {state.operation}</span>
              <span><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} handleClick={handleAddMemory}/>
              <CalcButton value={"MR"} handleClick={handleRecallMemory}/>
              <CalcButton value={"MC"} handleClick={handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} handleClick={()=>{ handleNumberClick(1); }}/>
              <CalcButton value={2} handleClick={()=>{ handleNumberClick(2); }}/>
              <CalcButton value={3} handleClick={()=>{ handleNumberClick(3); }}/>
            </div>

            <div className="row">
              <CalcButton value={4} handleClick={()=>{ handleNumberClick(4); }}/>
              <CalcButton value={5} handleClick={()=>{ handleNumberClick(5); }}/>
              <CalcButton value={6} handleClick={()=>{ handleNumberClick(6); }}/>
            </div>

            <div className="row">
              <CalcButton value={7} handleClick={()=>{ handleNumberClick(7); }}/>
              <CalcButton value={8} handleClick={()=>{ handleNumberClick(8); }}/>
              <CalcButton value={9} handleClick={()=>{ handleNumberClick(9); }}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} handleClick={handlePlusClick}/>
              <CalcButton value={"*"} handleClick={handleMultiplyClick}/>
              <CalcButton value={"-"} handleClick={handleMinusClick}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} handleClick={handleClearClick}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
