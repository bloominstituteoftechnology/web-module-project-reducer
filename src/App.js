import React,{useReducer} from 'react';

import reducer,{initialState} from './reducers/index';

import './App.css';
import { ADD_ONE } from './actions';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { applyNumber, changeOperation, clearDisplay, memoryPlus, memoryRecall, memoryClear } from './actions';




function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayHandler = () => {
      dispatch(clearDisplay())
    }

  const handleAddClick  = (value) => {
    dispatch(applyNumber(value));
  }
  const memoryPlusHandler = () => {
    dispatch(memoryPlus())
  }

  const memoryRecallHandler = () => {
    dispatch(memoryRecall())
  }
  const memoryClearHandler = () => {
    dispatch(memoryClear())
  }
  const addOperator = () => {
    dispatch(changeOperation('+'))
  }
  const subtractOperator = () => {
    dispatch(changeOperation('-'))
  }
  const multiplyOperator = () => {
    dispatch(changeOperation('*'))
  }





  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" alt="logo"/>Lambda Reducer Challenge </a>  
          
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
              <CalcButton value={"M+"} onClick={()=> dispatch(memoryPlusHandler())} />
              <CalcButton value={"MR"} onClick={()=> dispatch(memoryRecallHandler(state.memory))}/>
              <CalcButton value={"MC"}onClick={() => dispatch(memoryClearHandler())} />
            </div>

            <div className="row">
              <CalcButton value={1}onClick={() => dispatch(handleAddClick (1))} />
              <CalcButton value={2}onClick={() => dispatch(handleAddClick (2))} />
              <CalcButton value={3}onClick={() => dispatch(handleAddClick (3))} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => dispatch(handleAddClick (4))}/>
              <CalcButton value={5} onClick={() => dispatch(handleAddClick (5))}/>
              <CalcButton value={6}onClick={() => dispatch(handleAddClick (6))}/>
            </div>

            <div className="row">
              <CalcButton value={7}onClick={() => dispatch(handleAddClick (7))}/>
              <CalcButton value={8}onClick={() => dispatch(handleAddClick (8))}/>
              <CalcButton value={9}onClick={() => dispatch(handleAddClick (9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}onClick={() => dispatch(addOperator('+'))}/>
              <CalcButton value={"*"}onClick={() => dispatch(multiplyOperator('*'))}/>
              <CalcButton value={"-"}onClick={() => dispatch(subtractOperator('-'))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}onClick={() => dispatch(displayHandler())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
