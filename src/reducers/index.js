import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, SAVE_TO_MEMORY, ADD_MEMORY_TO_TOTAL, CLEAR_MEMORY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
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
            
        default:
            return state;

        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0,
            })

        case(SAVE_TO_MEMORY):
            return ({
                ...state,
                memory: state.total
            })

        case(ADD_MEMORY_TO_TOTAL):
            return ({
                ...state,
                total: state.total + state.memory
            })

        case(CLEAR_MEMORY):
            return ({
                ...state,
                memory: 0
            })
    }
}

export default reducer;