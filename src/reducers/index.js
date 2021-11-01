import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_PLUS, MEMORY_RECALL,MEMORY_CLEAR } from './../actions';

// import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } from './../actions';





export const initialState = {
    total: 100,  total: 0,
    operation: "*", operation: "+", operation:"-",
    memory: 100 , memory: 0
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
              return  null;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(CHANGE_OPERATION):
        return ({
            ...state,
            operation: action.payload
        });
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
                
        case (CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            });
        case (MEMORY_PLUS):
            return ({
                ...state,
                memory: state.total
            });
            case (MEMORY_RECALL):
                return ({
                    ...state,
                    total: calculateResult(state.total, state.memory, state.operation)
                });
        case (MEMORY_CLEAR):
            return ({
                ...state,
                memory: 0
            });
        

        default:
            return state;
    }
}

export default reducer;