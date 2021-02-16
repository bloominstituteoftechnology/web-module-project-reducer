import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, M_PLUS, M_R, M_C } from './../actions';

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

        case(CLEAR_DISPLAY):
        return ({
            ...state,
            total: 0
        })

        case(M_PLUS):
        return ({
            ...state,
            memory: state.total
        })

        case(M_R):
        return ({
            ...state,
            total: state.total + state.memory
        })

        case(M_C):
        return ({
            ...state,
            memory: 0
        })
            
        default:
            return state;
    }
}

export default reducer;