import React, { useReducer } from "react";
import "./App.css";
import reducer, { initialState, calculateResult } from "./reducers/index";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import { addOne } from "./actions/index";
import {
  memoryClear,
  applyNumber,
  changeOperator,
  clearDisplay,
  memoryAdd,
  memoryReturn,
} from "./actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandle = (n) => {
    dispatch(applyNumber(n));
  };
  const changeOperation = (op) => {
    dispatch(changeOperator(op));
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
                onClick={() => {
                  dispatch(memoryAdd());
                }}
                value={"M+"}
              />
              <CalcButton
                onClick={() => {
                  dispatch(memoryReturn());
                }}
                value={"MR"}
              />
              <CalcButton
                onClick={() => {
                  dispatch(memoryClear());
                }}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  clickHandle(1);
                }}
                value={1}
              />
              <CalcButton
                onClick={() => {
                  clickHandle(2);
                }}
                value={2}
              />
              <CalcButton
                onClick={() => {
                  clickHandle(3);
                }}
                value={3}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  clickHandle(4);
                }}
                value={4}
              />
              <CalcButton
                onClick={() => {
                  clickHandle(5);
                }}
                value={5}
              />
              <CalcButton
                onClick={() => {
                  clickHandle(6);
                }}
                value={6}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  clickHandle(7);
                }}
                value={7}
              />
              <CalcButton
                onClick={() => {
                  clickHandle(8);
                }}
                value={8}
              />
              <CalcButton
                onClick={() => {
                  clickHandle(9);
                }}
                value={9}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  changeOperation("+");
                }}
                value={"+"}
              />
              <CalcButton
                onClick={() => {
                  changeOperation("*");
                }}
                value={"*"}
              />
              <CalcButton
                onClick={() => {
                  changeOperation("-");
                }}
                value={"-"}
              />
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
