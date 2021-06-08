export const ADD_ONE = "ADD_ONE";

// export const ADD = "ADD"
// export const SUBTRACT = "SUBTRACT"
// export const MULTIPLY = "MULTIPLY"

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_TOTAL = "CLEAR_TOTAL"
export const CLEAR_MEMORY = "CLEAR_MEMORY"
export const ADD_TO_MEMORY = "ADD_TO_MEMORY"

const addOne = () => {
    return({type:ADD_ONE});
}

// const addTogether = () => {
//     return({operation: ADD})
// }

// const subtractTogether = () => {
//     return ({operation: SUBTRACT})
// }

// const multiplyTogether = () => {
//     return ({operation: MULTIPLY})
// }

const changeOperation = (operation) => {
    return({type: CHANGE_OPERATION, payload: operation})
}

const applyNumber = (number) => {
    return({type: APPLY_NUMBER, payload:number});
}

const clear = () => {
    return({type: CLEAR_TOTAL})
}

const clearMemory = () => {
    return({type: CLEAR_MEMORY})
}

const addToMemory = (number) => {
    return ({type: ADD_TO_MEMORY, payload: number })
}

export {addOne,
    // addTogether,
    // subtractTogether,
    // multiplyTogether,
    changeOperation,
    applyNumber,
    clear,
    clearMemory,
    addToMemory
}