import axios from 'axios';
import { Toast } from 'antd-mobile';

// 拦截请求
axios.interceptors.request.use(config => {
    Toast.loading('Loading...', 0);
    return config
})

// 相应拦截
axios.interceptors.response.use(config => {
    setTimeout(() => {
        Toast.hide()
    })
    return config
})                      