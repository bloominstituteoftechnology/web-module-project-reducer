//this is action
export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_OPERATION = "CLEAR_OPERATION";

//this is action creator
export const addOne = () => {
  return { type: ADD_ONE };
}; //type is must, payload is optional

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearOperation = () => {
  return { type: CLEAR_OPERATION };
};
