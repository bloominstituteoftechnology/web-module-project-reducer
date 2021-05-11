export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_MPLUS = "MEMORY_MPLUS";
export const MEMORY_MR = "MEMORY_MR";
export const MEMORY_MC = "MEMORY_MC";


export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const memoryPlus = () => {
    return({type:MEMORY_MPLUS})
}

export const memoryMR = () => {
    return({type:MEMORY_MR})
}

export const memoryMC = () => {
    return({type:MEMORY_MC})
}