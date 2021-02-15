import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, ADD_TO_MEMORY, CLEAR_MEMORY, USE_MEMORY } from './../actions';

    


export const initialState = {
    total: 0,
    operation: "",
    memory: 0
}


const calculateResult = (num1, operation, num2) => {
   

    switch(operation) {
        case ("+"):
            return (Number(num1) + Number(num2));
        case("*"):
            return (Number(num1) * Number(num2));
        case("-"):
            return (Number(num1) - Number(num2));
        default:
            return initialState.operation
    }
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: calculateResult(state.total, state.operation, action.payload)
            });

        case (APPLY_NUMBER):
            console.log()
            return ({ 
                ...state, 
                total: calculateResult(state.total, state.operation, action.payload)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                 operation: action.payload         
            });
            
        case (CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            })
        
        // memory buttons

        // mr
        case (ADD_TO_MEMORY):
            return ({
                ...state,
                   memory:state.total + state.memory
            })
        
        // mc
         case (CLEAR_MEMORY):
             return ({
                ...state,
                  memory: 0
            })
        
        // m+
        case (USE_MEMORY):
            return ({
                ...state,
                memory:state.total
            })
                
            
       
        default:
            return state;
    }
}

export default reducer;