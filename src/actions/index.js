export const ADD_ONE = 'ADD_ONE';
export const CLEAR_OPERATION = 'CLEAR_OPERATION';
export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const MEMORY_ADD = 'MEMORY_ADD';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';
export const USE_MEMORY = 'USE_MEMORY';
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearOperation = () => {
  return { type: CLEAR_OPERATION };
};

export const addToMemory = () => {
  return { type: MEMORY_ADD };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};

export const useNumMemory = () => {
  return { type: USE_MEMORY };
};
