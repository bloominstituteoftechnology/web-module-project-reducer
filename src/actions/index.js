export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';

export const MPLUS = 'MPLUS';
export const MR = 'MR';
export const MC = 'MC';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (sign) => {
    return({type:CHANGE_OPERATION, payload:sign})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const mPlus = (memory) => {
    return({type:MPLUS, payload:memory})
}

export const mr = (memory) => {
    return({type:MR, payload:memory})
}

export const mc = (memory) => {
    return({type:MC, payload:memory})
}