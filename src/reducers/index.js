import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY,ADD_MEMORY, ADD_MEMORY_TO_TOTAL, CLEAR_MEMORY } from './../actions';


export const initialState = {
    total: 200,
    operation: "+",
    memory: 200
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
                return null;    
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
            return ({
                ...state,
                total: 0
            })
        case(ADD_MEMORY):
        return({
            ...state,
            memory: action.payload
            
        })
        case(ADD_MEMORY_TO_TOTAL):
            return({
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            })
        case(CLEAR_MEMORY):
        return({
            ...state,
            memory: 0
        })

        default:
            return state;
    }
}

export default reducer;