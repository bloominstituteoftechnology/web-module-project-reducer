export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEMORY = "ADD_MEMORY";
export const RECALL_MEMORY = "RECALL_MEMORY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (op) => {
  return { type: CHANGE_OPERATION, payload: op };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const addMemory = (total) => {
  return { type: ADD_MEMORY, payload: total };
};

export const recallMemory = (memory) => {
  return { type: RECALL_MEMORY, payload: memory };
};
