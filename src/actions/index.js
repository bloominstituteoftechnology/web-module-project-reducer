export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const MEMORY_RECALL = "MEMORY_RECALL";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
	return { type: ADD_ONE };
};
export const memoryPlus = () => {
	return { type: MEMORY_PLUS };
};
export const memoryClear = () => {
	return { type: MEMORY_CLEAR };
};
export const memoryRecall = () => {
	return { type: MEMORY_RECALL };
};
export const clearDisplay = () => {
	return { type: CLEAR_DISPLAY };
};
export const changeOperation = (opp) => {
	return { type: CHANGE_OPERATION, payload: opp };
};

export const applyNumber = (number) => {
	return { type: APPLY_NUMBER, payload: number };
};
