import { ADD_TWO ,ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } from './../actions';
// here we have to import the 'types' from the action
// this is our initial state
export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}
//idk what this is yet....
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

//okay, so here we take the initial state, and the action that will be performed, 
const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });
        // this is where you separate the types from the action, since we named the action ADD_TWO, we write it in as that
        case(ADD_TWO):
            return ({
                ...state,
                total: state.total + 2
            })

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
    }
}

export default reducer;