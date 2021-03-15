export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
export const M_PLUS = 'M_PLUS'
export const M_REPLACE = 'M_REPLACE'
export const M_CLEAR = 'M_CLEAR'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type: CHANGE_OPERATION, payload:operator })
}

export const clearDisplay = () => {
    return ({type: CLEAR_DISPLAY})
}

export const mPlus = () => {
    return({type: M_PLUS})
}

export const mReplace = () => {
    return({type: M_REPLACE})
}

export const mClear = () => {
    return({type: M_CLEAR})
}