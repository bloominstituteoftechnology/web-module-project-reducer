import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, CLEAR_MEMORY, ACTION_MR } from './../actions';

export const initialState = {
    total: 100,
    operation: "*",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
        default:
            return;
    }
}

const mrResult = (num1, num2) => {
        return num1 = num2;     
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

        case CLEAR_DISPLAY:
                return { ...state, total: 0};

        case CLEAR_MEMORY:
                return { ...state, memory: 0};
                
        case ACTION_MR:
                return { 
                    ...state, 
                    total: mrResult(state.total, state.memory)
                };
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        default:
            return state;
    }
}

export default reducer;