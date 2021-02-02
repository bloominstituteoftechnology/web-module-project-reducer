import { ADD_ONE } from './../actions';

export const initialState = {
    total: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            state.total += 1;
        default:
            return state;
    }
}

export default reducer;