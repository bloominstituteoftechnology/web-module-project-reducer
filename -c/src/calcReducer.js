import {ADD_ACTION, SUBTRACT_ACTION, CLEAR_ACTION, ADD_TO_MEMORY_ACTION} from '../actions/calcActions'

export const intialState = {
  currentValue: 120,
  memory: 0
}

const reducer = (state, action) => {
    switch (action.type) {
      case ADD_ACTION:
        return { ...state, currentValue: state.currentValue + action.payload };
      case SUBTRACT_ACTION:
        return { ...state, currentValue: state.currentValue - action.payload };
      case CLEAR_ACTION:
        return { ...state, currentValue: 0 };
      case ADD_TO_MEMORY_ACTION:
        return { ...state, memory: state.currentValue };
      default:
        return state;
    }
  };
  
  export default reducer;