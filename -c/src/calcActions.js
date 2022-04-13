export const ADD_ACTION = "ADD";
export const SUBTRACT_ACTION = "SUBTRACT";
export const CLEAR_ACTION = "CLEAR";
export const ADD_TO_MEMORY_ACTION = "ADD_TO_MEMORY";



// action creator
export const addAction = (input) => {
    return { type: ADD_ACTION, payload: input}
  }

export const subtractAction = (input) => {
    return { type: SUBTRACT_ACTION, payload: input}
}

export const clearAction = () => {
    return { type: CLEAR_ACTION}
}

export const addToMemoryAction = () => {
    return { type: ADD_TO_MEMORY_ACTION}
}