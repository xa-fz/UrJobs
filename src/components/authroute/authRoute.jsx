import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { loadData } from '../../redux/user.redux';
import { connect } from 'react-redux';

const AuthRoute = (props) => {
    const pathname = props.location.pathname;

    useEffect(() => {
        const pluliceList = ['/login', '/register'];
        
        if (pluliceList.includes(pathname)) {
            return
        }
        // 获取用户信息
        axios.get('/user/info')
        .then(res => {
            if (res.status === 200) {
                if (res.data.code === 0) {
                    loadData(res.data.data);
                } else {
                    props.history.push('/login')
                }
            }
    })
    }, [pathname, props.history])

    return (
        <div></div>
    )
}

const mapDispatchToProps = {
    loadData
}


export default connect(null, mapDispatchToProps)(withRouter(AuthRoute))