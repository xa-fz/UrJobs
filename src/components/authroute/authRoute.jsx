import React, { useEffect } from 'react';
import axios from 'axios';

const AuthRoute = () => {

    useEffect(() => {
        axios.get('/user/info').
            then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                }
            })
    }, [])

    return (
        <div>用来判断路由跳转</div>
    )
}

export default AuthRoute