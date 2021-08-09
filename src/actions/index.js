export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MR_BUTTON = "MR_BUTTON";
export const MR_BUTTON_RESET = "MR_BUTTON_RESET";



export const applyNumber = (number) => { return({type:APPLY_NUMBER, payload:number});}

export const changeOperation = (symbol) => {return({type:CHANGE_OPERATION, payload:symbol})}

export const deleteDaddy = () => {return({type:CLEAR_DISPLAY})}

export const memoryAdd = () => {return({type:MEMORY_PLUS})}

export const memoryToTotal = () => {return({type:MR_BUTTON})}
export const mrReset = () => {return({type:MR_BUTTON_RESET})}

