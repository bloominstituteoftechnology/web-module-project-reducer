import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  recallMemory,
  clearMemory,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandle = (num) => {
    dispatch(applyNumber(num));
  };

  const operationHandle = (op) => {
    dispatch(changeOperation(op));
  };

  const clearHandle = (e) => {
    dispatch(clearDisplay());
  };

  const memoryAddHandle = (total) => {
    dispatch(addMemory(total));
  };

  const memoryRecallHandle = (memory) => {
    dispatch(recallMemory(memory));
  };

  const memoryClearHandle = () => {
    dispatch(clearMemory());
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
                value={"M+"}
                onClick={() => memoryAddHandle(state.total)}
              />
              <CalcButton
                value={"MR"}
                onClick={() => memoryRecallHandle(state.memory)}
              />
              <CalcButton value={"MC"} onClick={memoryClearHandle} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => clickHandle(1)} />
              <CalcButton value={2} onClick={() => clickHandle(2)} />
              <CalcButton value={3} onClick={() => clickHandle(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => clickHandle(4)} />
              <CalcButton value={5} onClick={() => clickHandle(5)} />
              <CalcButton value={6} onClick={() => clickHandle(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => clickHandle(7)} />
              <CalcButton value={8} onClick={() => clickHandle(8)} />
              <CalcButton value={9} onClick={() => clickHandle(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operationHandle("+")} />
              <CalcButton value={"*"} onClick={() => operationHandle("*")} />
              <CalcButton value={"-"} onClick={() => operationHandle("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandle} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
