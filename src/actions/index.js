export const ADD_ONE = 'ADD_ONE';
export const CLEAR_OPERATION = 'CLEAR_OPERATION';
export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';

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
