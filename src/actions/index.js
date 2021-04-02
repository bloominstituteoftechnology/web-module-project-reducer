export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_TO_STATE = "MEMORY_TO_STATE";
export const STATE_TO_MEMORY = "STATE_TO_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperator = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};
export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
export const memoryToState = (currentmemory) => {
  return { type: MEMORY_TO_STATE, payload: currentmemory };
};
export const stateToMemory = (currentstate) => {
  return { type: STATE_TO_MEMORY, payload: currentstate };
};
export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};
