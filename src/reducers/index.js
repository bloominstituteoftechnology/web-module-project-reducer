import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CHANGE_MEMORY, CLEAR_DISPLAY}  from './../actions';

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
const calculateMemory = (total, memoryOp) =>{
switch (memoryOp){
    case("M+"):
        return total;
    case("MC"):
        return(0);
    case ("MR"):
        return undefined;
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
    case (CHANGE_MEMORY):
        
    const memoryOperator = action.payload;
        if(memoryOperator === "MR"){
            return ({
                ...state,
            total: state.memory
})
}
        else {
            return ({
                ...state,
                memory: calculateMemory(state.total,action.payload)
})
}
    case(CLEAR_DISPLAY):
        return ({
            ...state,
            total:0
            });

default:
return state;

}}
export default reducer;