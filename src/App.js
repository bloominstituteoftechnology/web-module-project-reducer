import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import {
	ADD_ONE,
	applyNumber,
	changeOperator,
	clearDisplay,
	memoryTotal,
	memoryRecall,
	memoryClear,
} from "./actions/index";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	// const handleAddOne = (e) => {
	// 	e.preventDefault();
	// 	dispatch({ type: ADD_ONE, payload: 1 });
	// };

	const clickHandler = (number) => {
		dispatch(applyNumber(number));
		// debugger;
	};

	const operationHandler = (operator) => {
		dispatch(changeOperator(operator));
	};

	const clearHandler = () => {
		dispatch(clearDisplay());
	};

	const memTotalHandler = () => {
		dispatch(memoryTotal());
	};

	const memRecallHandler = () => {
		dispatch(memoryRecall());
	};

	const memClearHandler = () => {
		dispatch(memoryClear());
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
								onClick={() => {
									memTotalHandler();
								}}
							/>
							<CalcButton
								value={"MR"}
								onClick={() => {
									memRecallHandler();
								}}
							/>
							<CalcButton
								value={"MC"}
								onClick={() => {
									memClearHandler();
								}}
							/>
						</div>

						<div className="row">
							<CalcButton
								value={1}
								onClick={() => {
									clickHandler(1);
								}}
							/>
							<CalcButton
								value={2}
								onClick={() => {
									clickHandler(2);
								}}
							/>
							<CalcButton
								value={3}
								onClick={() => {
									clickHandler(3);
								}}
							/>
						</div>

						<div className="row">
							<CalcButton
								value={4}
								onClick={() => {
									clickHandler(4);
								}}
							/>
							<CalcButton
								value={5}
								onClick={() => {
									clickHandler(5);
								}}
							/>
							<CalcButton
								value={6}
								onClick={() => {
									clickHandler(6);
								}}
							/>
						</div>

						<div className="row">
							<CalcButton
								value={7}
								onClick={() => {
									clickHandler(7);
								}}
							/>
							<CalcButton
								value={8}
								onClick={() => {
									clickHandler(8);
								}}
							/>
							<CalcButton
								value={9}
								onClick={() => {
									clickHandler(9);
								}}
							/>
						</div>

						<div className="row">
							<CalcButton
								value={"+"}
								onClick={() => {
									operationHandler("+");
								}}
							/>
							<CalcButton
								value={"*"}
								onClick={() => {
									operationHandler("*");
								}}
							/>
							<CalcButton
								value={"-"}
								onClick={() => {
									operationHandler("-");
								}}
							/>
						</div>

						<div className="row ce_button">
							<CalcButton
								value={"CE"}
								onClick={() => {
									clearHandler();
								}}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
