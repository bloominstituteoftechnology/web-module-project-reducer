import {useReducer} from 'react';
import reducer, {initialState} from './reducers';

import './App.css';

import AnswerDisplay from './components/AnswerDisplay';
import CalcButton from './components/CalcButton';

import {addOne} from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOneClick = ()=>{
    dispatch(addOne());
  };

  console.log('state ', state);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Lambda Calculator</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <AnswerDisplay value={state.total}/>
            {/* <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div> */}

            <div className="row">
              <CalcButton value={1} handleClick={handleOneClick}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={8}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row">
              <CalcButton value={"/"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"⟵"}/>
            </div>

            <div className="row">
              <CalcButton value={"="} size={6}/>
              <CalcButton value={"CE"} size={6}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
