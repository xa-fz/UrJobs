import axios from 'axios';

const initData = {
    isAuth: false,
    user: '',
    age: 0
}

function auth (state = initData, action) {
    console.log(state, action);
    switch (action.type) {
        case 'LOGIN':
            return {...state, isAuth: true}
        case 'LOGOUT':
            return {...state, isAuth: false}
            case 'USER_INFO':
            return {...state, ...action.payload}
        default: 
        return state
    }
}

// 声明action
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_INFO = 'USER_INFO';

export function login () {
    return {
        type: LOGIN
    }
}

export function logout () {
    return {
        type: LOGOUT
    }
}

export function userdata (data) {
    return {
        type: USER_INFO,
        payload: data
    }
}

// 调用接口
export function getUser () {
    return dispatch => {
        axios.get('/data')
            .then(res => {
                dispatch(userdata(res.data[0]))
            })
    }
}

export default auth