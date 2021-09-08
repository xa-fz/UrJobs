import { combineReducers } from 'redux';
const ADD_ = 'add';

// reducer
function counter (state=0, action) {
    switch(action.type) {
        case 'add':
            return state + 1;
        default:
            return 10
    }
}

//actions creator
export function add() {
    return { type: ADD_ }
}

export function addThunk() {
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 300)
    }
}

const testReducer = combineReducers({
    counter
})

export default testReducer;