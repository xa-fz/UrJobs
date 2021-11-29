import axios from "axios"
import { getRedirectPath } from './utils'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_DATA = 'LOGIN_DATA'

const initState = {
    isAuth: '',
    msg: '',
    user: '',
    type: '',
    redirectTo:''
}

export function user (state = initState, action) {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state, 
                msg: '', 
                isAuth: true, 
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            }
        case LOGIN_SUCCESS:
            return {...state, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload}
        case LOGIN_DATA:
            return {...state, ...action.payload}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.payload}
         default:
             return state;
    }
}

// actions
export function errorMsg (msg) {
    return { payload: msg, type: ERROR_MSG }
}

export function registerSuccess (data) {
    return { 
        payload: data, 
        type: REGISTER_SUCCESS
    }
}

export function loginSuccess (data) {
    return {
        payload: data,
        type: LOGIN_SUCCESS
    }
}

export function loadData (data) {
    return {
        payload: data,
        type: LOGIN_DATA
    }
}

// 定义的接口方法
export function login ({user, pwd}) {
    if (!user || !pwd) {
        return errorMsg('请输入用户名和密码!')
    }
    return dispatch => {
        axios.post('/user/login', {user, pwd})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(loginSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

export function register({user, pwd, repeatPwd, type}) {
    if (!user || !pwd) {
        return errorMsg('请输入用户名和密码!')
    }
    if(pwd !== repeatPwd){
        return errorMsg('两次密码输入不一致，请重新输入！')
    }
    return dispatch => {
        axios.post('/user/register', {user, pwd, type})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(registerSuccess({user, pwd, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}