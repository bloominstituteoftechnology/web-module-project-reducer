export const ADD_ONE = "ADD_ONE";
export const SUBTRACT_ONE = 'SUBTRACT_ONE';
export const DIVIDE = 'DIVIDE';
export const MULTIPLY = "MULTIPLY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";




export const addOne = (num) => {
    return ({ type: ADD_ONE, payload: num });
}

export const subtract = (num) => {
    return ({type: SUBTRACT_ONE, payload: num})
}

export const divide = (num) => {
  return { type: DIVIDE, payload: num };
};

export const multiply = (num) => {
  return { type: MULTIPLY, payload: num };
};

export const applyNumber = (number) => {
    return ({ type: APPLY_NUMBER, payload: number })
};

export const changeOperation = (operation) => {
    return ({ type: CHANGE_OPERATION, payload: operation })
};

export const clearDisplay = () => {
    return ({type: CLEAR_DISPLAY})
}

