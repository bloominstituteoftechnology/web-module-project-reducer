import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_TO_STATE,
  STATE_TO_MEMORY,
  CLEAR_MEMORY,
} from "./../actions";

export const initialState = {
  total: 100,
  operation: "+",
  memory: 100,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
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

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        total: (state.total = 0),
      };
    case MEMORY_TO_STATE:
      return {
        ...state,
        total: state.memory,
      };
    case STATE_TO_MEMORY:
      return {
        ...state,
        memory: state.total,
      };
    case CLEAR_MEMORY:
      return {
        ...state,
        memory: (state.memory = 0),
      };

    default:
      return state;
  }
};

export default reducer;
