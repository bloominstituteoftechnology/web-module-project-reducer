import {useReducer} from 'react';
import reducer, {initialState} from './reducers';

import './App.css';

import AnswerDisplay from './components/AnswerDisplay';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Lambda Calculator</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <AnswerDisplay value={100}/>

            <div className="row">
              <div className="col-xs-4">
                <button type="button" className="btn">1</button>
              </div>

              <div className="col-xs-4">
                <button type="button" className="btn">2</button>
              </div>

              <div className="col-xs-4">
                <button type="button" className="btn">3</button>
              </div>

            </div>
            <div className="row">
              <div className="col-xs-4">
                <button type="button" className="btn">4</button>
              </div>

              <div className="col-xs-4">
                <button type="button" className="btn">5</button>
              </div>

              <div className="col-xs-4">
                <button type="button" className="btn">6</button>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <button type="button" className="btn">7</button>
              </div>

              <div className="col-xs-4">
                <button type="button" className="btn">8</button>
              </div>
              
              <div className="col-xs-4">
                <button type="button" className="btn">9</button>	
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <button type="button" className="btn">+</button>	
              </div>
              <div className="col-xs-4">
                <button type="button" className="btn">0</button>	
              </div>
              <div className="col-xs-4">
                <button type="button" className="btn">-</button>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <button type="button" className="btn">/</button>
              </div>
              <div className="col-xs-4">
                <button type="button" className="btn">*</button>
              </div>
              <div className="col-xs-4">
                <button type="button" className="btn">⟵</button>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 p-0">
                <button type="button" className="btn">=</button>
              </div>
              <div className="col-xs-6 p-0">
                <button type="button" className="btn">CE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
