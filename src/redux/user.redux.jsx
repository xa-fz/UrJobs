import axios from "axios"
import { getRedirectPath } from './utils'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    isAuth: '',
    msg: '',
    user: '',
    pwd: '',
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
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.payload}
         default:
             return state;
    }
}

export function errorMsg (msg) {
    console.log(msg);
    return { payload: msg, type: ERROR_MSG }
}

export function registerSuccess (data) {
    return { 
        payload: data, 
        type: REGISTER_SUCCESS
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