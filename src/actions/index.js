export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISLAY";

export const addOne = () => {
  return({type:ADD_ONE});
}

export const applyNumber = (number) => {
  return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
  return({type: CHANGE_OPERATION, payload: operation});
}

export const cleardisplay = () => {
  return({type: CLEAR_DISPLAY});
}