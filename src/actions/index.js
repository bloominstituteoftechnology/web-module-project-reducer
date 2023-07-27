export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const HANDLE_CLEAR = "HANDLE_CLEAR";
export const HANDLE_SAVE_MEMORY = "HANDLE_SAVE_MEMORY";
export const MEMORY_APPLY_NUMBER = "MEMORY_APPLY_NUMBER";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload: operation});
}

export const handleClear = () => {
    return({type:HANDLE_CLEAR});
}

export const handleSaveMemory = () => {
    return({type:HANDLE_SAVE_MEMORY});
}

export const memoryApplyNumber = () => {
    return({type:MEMORY_APPLY_NUMBER});
}

export const memoryClear = () => {
    return({type:MEMORY_CLEAR});
}