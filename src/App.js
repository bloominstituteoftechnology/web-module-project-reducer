import React, { useReducer } from "react";
import {
	applyNumber,
	changeOperation,
	clearDisplay,
	memoryPlus,
	memoryClear,
	memoryRecall,
} from "../src/actions/index";

import "./App.css";
import reducer, { initialState } from "./reducers/index";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const memoryBank = () => {
		dispatch(memoryRecall());
	};
	const memoryAdd = () => {
		dispatch(memoryPlus());
	};
	const memoryReset = () => {
		dispatch(memoryClear());
	};
	const applyNum = (num) => {
		dispatch(applyNumber(num));
	};
	const clearSlate = () => {
		dispatch(clearDisplay());
	};
	const changeOp = (opp) => {
		dispatch(changeOperation(opp));
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
							<CalcButton onClick={() => memoryAdd()} value={"M+"} />
							<CalcButton onClick={() => memoryBank()} value={"MR"} />
							<CalcButton onClick={() => memoryReset()} value={"MC"} />
						</div>

						<div className="row">
							<CalcButton onClick={() => applyNum(1)} value={1} />
							<CalcButton onClick={() => applyNum(2)} value={2} />
							<CalcButton onClick={() => applyNum(3)} value={3} />
						</div>

						<div className="row">
							<CalcButton onClick={() => applyNum(4)} value={4} />
							<CalcButton onClick={() => applyNum(5)} value={5} />
							<CalcButton onClick={() => applyNum(6)} value={6} />
						</div>

						<div className="row">
							<CalcButton onClick={() => applyNum(7)} value={7} />
							<CalcButton onClick={() => applyNum(8)} value={8} />
							<CalcButton onClick={() => applyNum(9)} value={9} />
						</div>

						<div className="row">
							<CalcButton onClick={() => changeOp("+")} value={"+"} />
							<CalcButton onClick={() => changeOp("*")} value={"*"} />
							<CalcButton onClick={() => changeOp("-")} value={"-"} />
						</div>

						<div className="row ce_button">
							<CalcButton onClick={() => clearSlate()} value={"CE"} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
