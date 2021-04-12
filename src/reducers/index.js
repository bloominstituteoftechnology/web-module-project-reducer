import {
	ADD_ONE,
	APPLY_NUMBER,
	CHANGE_OPERATION,
	CLEAR_DISPLAY,
	MEMORY_PLUS,
	MEMORY_CLEAR,
	MEMORY_RECALL,
} from "./../actions";

export const initialState = {
	total: 0,
	operation: "*",
	memory: 0,
};

const calculateResult = (num1, num2, operation) => {
	switch (operation) {
		case "+":
			return num1 + num2;
		case "*":
			return num1 * num2;
		case "-":
			return num1 - num2;
	}
};

const reducer = (state, action) => {
	const memoryResult = state.memory + state.total;

	switch (action.type) {
		case ADD_ONE:
			return {
				...state,
				total: state.total + 1,
			};

		case APPLY_NUMBER:
			return {
				...state,
				total: calculateResult(state.total, action.payload, state.operation),
			};

		case CLEAR_DISPLAY:
			return {
				...state,
				total: initialState.total,
			};

		case CHANGE_OPERATION:
			return {
				...state,
				operation: action.payload,
			};
		case MEMORY_PLUS:
			return {
				...state,
				memory: memoryResult,
			};
		case MEMORY_RECALL:
			return {
				...state,
				total: memoryResult,
			};
		case MEMORY_CLEAR:
			return {
				...state,
				memory: 0,
			};

		default:
			return state;
	}
};

export default reducer;
