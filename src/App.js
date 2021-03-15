import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import reducer, { initialState } from "./reducers";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  setMemory,
  applyMemory,
  clearMemory,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (value) => {
    return (e) => {
      typeof value === "string"
        ? dispatch(changeOperation(value))
        : dispatch(applyNumber(value));
    };
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                onClick={(e) => {
                  dispatch(setMemory());
                }}
                value={"M+"}
              />
              <CalcButton
                onClick={(e) => {
                  dispatch(applyMemory());
                }}
                value={"MR"}
              />
              <CalcButton
                onClick={(e) => {
                  dispatch(clearMemory());
                }}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick(1)} value={1} />
              <CalcButton onClick={handleClick(2)} value={2} />
              <CalcButton onClick={handleClick(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick(4)} value={4} />
              <CalcButton onClick={handleClick(5)} value={5} />
              <CalcButton onClick={handleClick(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick(7)} value={7} />
              <CalcButton onClick={handleClick(8)} value={8} />
              <CalcButton onClick={handleClick(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick("+")} value={"+"} />
              <CalcButton onClick={handleClick("*")} value={"*"} />
              <CalcButton onClick={handleClick("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton
                onClick={() => {
                  dispatch(clearDisplay());
                }}
                value={"CE"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
