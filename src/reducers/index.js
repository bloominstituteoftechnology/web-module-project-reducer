import {
    ADD_ONE,
    APPLY_NUMBER,
    CHANGE_OPERATION,
    CLEAR_CALC,
    MPLUS,
    MR,
    MC
} from './../actions';

export const initialState = {
    total: 100,
    operation: "+",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    switch (operation) {
        case ("+"):
            return num1 + num2;
        case ("*"):
            return num1 * num2;
        case ("-"):
            return num1 - num2;
    }
}

export const reducer = (state, action) => {
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
        case (CLEAR_CALC):
            return ({
                ...state,
                total: 100
            });
            case(MPLUS):
            return({
                ...state,
                memory: state.total
            });
            case(MR):
            return({
                ...state,
                total: state.memory
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