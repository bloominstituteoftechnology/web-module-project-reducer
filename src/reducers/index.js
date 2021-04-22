import { ADD_ONE, CHANGE_MEMORY, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY } from './../actions';

// export const initialState = {
//     total: 100,
//     operation: "*",
//     memory: 100
// }

// TEST CASE
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

const calculateMemory = (total, memoryOperator) => {
    switch(memoryOperator) {
        case("M+"):
            return total;
        case("MC"):
            return 0;
        case("MR"):
            console.log("ERROR: Calculate Memory does not handle \"MR\" memoryOperator");
            return undefined;
    }
};

// * [ ] When `M+` is pressed, the current memory value should be set to the current total value. Test by seeing the result of memory in the UI.
// * [ ] When `MR` is pressed, the current memory value should be applied to the current total value(See the APPLY_NUMBER case). Test by adding a value to memory and then seeing if the total updates correctly when pressed.
// * [ ] When `MC` is pressed, the current memory value should be set to zero. Test by adding a value to memory and then seeing the memory value reset to zero when pressed.


const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(CHANGE_MEMORY):
            const memoryOperator = action.payload;
            if (memoryOperator === "MR") {
                return ({
                    ...state,
                    total: state.memory
                })
            } else {
                return ({
                    ...state,
                    memory: calculateMemory(state.total, action.payload)
                })
            };

        case(APPLY_NUMBER):
        // console.log("Type of payload:", typeof(action.payload)) STRING! 
            return ({ 
                ...state, 
                total: calculateResult(state.total, Number(action.payload), state.operation)
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
            });
            
        default:
            return state;
    }
}

export default reducer;