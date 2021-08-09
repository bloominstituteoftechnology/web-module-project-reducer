import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_VALUE, MEMORY_GRABBED, MEMORY_CLEARED, ENTERED_NUMBER } from './../actions';

export const initialState = {
    total: "",
    operation: "+",
    memory: "",
    num1:"",
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}
// calculateResult(state.total, action.payload state.operation)
const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: state.total + action.payload,
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload,
                num1: state.total,
                total: ""
            });
        case(CLEAR_DISPLAY):
            return ({ ...state, total: "", num1: ""});
        case(MEMORY_VALUE):
            return({...state, memory: state.total})
        case(MEMORY_GRABBED):
        return ({ 
            ...state, 
            total: state.memory
        });
        case(MEMORY_CLEARED):
            return({ ...state, memory: 0})
        case(ENTERED_NUMBER):
            return({ ...state, 
                total: calculateResult(state.num1, state.total, state.operation)})
            
        default:
            return state;
    }
}

export default reducer;


