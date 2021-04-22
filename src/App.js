import { useReducer } from 'react';

import './App.css';

import { applyNumber, changeOperator, clearDisplay, saveMemory, clearMemory, applyMemory} from './actions/'; //index.js reads automatically
import reducer, { initialState } from './reducers/index.js';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const applyNumberFunction = (param) => {
    dispatch(applyNumber(param));
  }

  const changeOperatorFunction = (param) => {
    dispatch(changeOperator(param));
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
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => dispatch(saveMemory())} value={"M+"}/>
              <CalcButton onClick={() => dispatch(applyMemory())} value={"MR"}/>
              <CalcButton onClick={() => dispatch(clearMemory())}value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberFunction(1)} value={1}/>
              <CalcButton onClick={() => applyNumberFunction(2)}value={2}/>
              <CalcButton onClick={() => applyNumberFunction(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberFunction(4)} value={4}/>
              <CalcButton onClick={() => applyNumberFunction(5)}value={5}/>
              <CalcButton onClick={() => applyNumberFunction(6)}value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberFunction(7)} value={7}/>
              <CalcButton onClick={() => applyNumberFunction(8)} value={8}/>
              <CalcButton onClick={() => applyNumberFunction(9)}value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => changeOperatorFunction("+")} value={"+"}/>
              <CalcButton onClick={() => changeOperatorFunction("*")}value={"*"}/>
              <CalcButton onClick={() => changeOperatorFunction("-")}value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => dispatch(clearDisplay())} value={"CE"}/>
            </div>
{/*if you aren't writing a helper function, then you use the dispatch right in there. The helper function is where the dispatch lives */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
