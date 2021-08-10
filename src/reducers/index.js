/**
 * Tom Bielawski
 * Lambda School WEB45 Reducer Pattern
 * 3.2.1
 * 8/9/2021
 **/

//Imports
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_PLUS, MEMORY_R, MEMORY_C} from './../actions';

//Initial state
export const initialState = 
{
    
    total: 0,
    operation: "+",
    memory: 0
}

//Calculate results
const calculateResult = (num1, num2, operation) => 
{
    switch(operation) 
    {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
            default : ;
    }
}

//Reducer function, parameters: state and action
const reducer = (state, action) => 
{
    //Switch
    switch(action.type) 
    {
        //Case to add
        case(ADD_ONE):
            return({...state, total: state.total + 1 });

        //Case to apply
        case(APPLY_NUMBER):
            return ({...state, total: calculateResult(state.total, action.payload, state.operation)});
        
        //Case to change ops
        case(CHANGE_OPERATION):
            return ({...state, operation: action.payload });

        //Case to clear the display
        case(CLEAR_DISPLAY):
            return ({...state, total: 0 });
        
        //Case to assign total to memory
        case(MEMORY_PLUS):
            return({...state, memory: state.total });

        //Case to add memory to total
        case(MEMORY_R):
            return({...state, total: state.memory + state.total });
        
        //Case to clear memory
        case(MEMORY_C):
            return({...state, memory: 0 });
            
        default:
            return state;
    }
}

export default reducer;