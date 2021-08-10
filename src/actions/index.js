export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEM = "ADD_MEM";
export const APPLY_MEM = "APPLY_MEM";
export const CLEAR_MEM = "CLEAR_MEM";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const addMemory = () => {
  return { type: ADD_MEM };
};

export const applyMemory = () => {
  return { type: APPLY_MEM };
};

export const clearMemory = () => {
  return { type: CLEAR_MEM };
};
