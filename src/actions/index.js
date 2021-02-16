export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const M_PLUS = "M_PLUS"
export const M_R = "M_R"
export const M_C = "M_C"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})

}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const setCurrentTotal = () => {
    return({type:M_PLUS})
}

export const addTotalWithMemory = () => {
    return ({type: M_R})
}

export const clearMemory = () => {
    return ({type: M_C})
}