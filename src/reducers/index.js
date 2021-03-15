import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_CALC, MEM_STORED, M_R, M_C } from './../actions';

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
        default:
            return initialState;
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
        case(CLEAR_CALC):
            return (initialState);
        case(MEM_STORED):
            return({
                ...state,
                memory: action.payload
            })    
        case(M_R):
            return({
                ...state,
                memory: state.memory+state.total
            })   
        case(M_C):
            return({
                ...state,
                memory: 0
            })     
        default:
            return state;
    }
}

export default reducer;