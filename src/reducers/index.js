
import { 
    ADD_ONE, 
    APPLY_NUMBER, 
    CHANGE_OPERATION, 
    CLEAR_DISPLAY, 
    MEMORY_ADD, 
    MEMORY_RECALL, 
    MEMORY_CLEAR 
} from './../actions';

export const initialState = {
    // total: 100,
    // operation: "*",
    // memory: 100
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    //eslint-disable-next-line
    switch (operation) {
        case ("+"):
            return num1 + num2;
        case ("*"):
            return num1 * num2;
        case ("-"):
            return num1 - num2;
    }

}

const reducer = (state, action) => {
    switch (action.type) {
        case (ADD_ONE):
            return ({
                ...state,
                total: state.total + 1
            });

        case (APPLY_NUMBER):
            return ({
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            });

        case (CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case (CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            });
        case (MEMORY_ADD):
            return ({
                ...state,
                memory: state.total
            });
        case (MEMORY_RECALL):
            return ({
                ...state,
                total: calculateResult(state.total, state.memory, state.operation)
            })
        case (MEMORY_CLEAR):
            return ({
                ...state,
                memory: 0
            })

        default:
            return state;
    }
}

export default reducer;