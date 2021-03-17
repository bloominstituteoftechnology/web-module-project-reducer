import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MPLUS, MR, MC } from './../actions';

export const initialState = {
    total: 10,
    operation: "+",
    memory: 1000
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
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case(CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            });
        case(MPLUS):
            return({
                ...state,
                memory: state.total
            });
        case(MR):
            return({
                ...state,
                total: calculateResult(state.total, state.memory, state.operation)
            });
        case(MC):
            return({
                ...state,
                memory: 0
            });
        default:
            return state;
    }
}

export default reducer;