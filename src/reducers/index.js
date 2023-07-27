import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, HANDLE_CLEAR, HANDLE_SAVE_MEMORY, MEMORY_APPLY_NUMBER, MEMORY_CLEAR } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return Number(num1) + Number(num2);
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
            return ( state.total !== 0 ? { 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            } : {...state,
            total: action.payload}
            );
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(HANDLE_SAVE_MEMORY):
            return({
                ...state,
                memory: state.total,
            })
        case(HANDLE_CLEAR):
            return({
                ...initialState,
                memory: state.memory
            });
        
        case(MEMORY_APPLY_NUMBER):
            return(state.memory !== 0 ? {
                ...state,
                total: calculateResult(state.total, state.memory, state.operation)
            }: state)
            
        case(MEMORY_CLEAR):
            return({
                ...state,
                memory: 0
            })
        default:
            return state;
    }
}

export default reducer;