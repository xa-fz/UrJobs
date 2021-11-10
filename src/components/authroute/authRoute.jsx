import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const AuthRoute = (props) => {
    const pathname = props.location.pathname;

    useEffect(() => {
        const pluliceList = ['/login', '/register'];
        
        if (pluliceList.includes(pathname)) {
            return
        }
        axios.get('/user/info')
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    if (res.data.code === 0) {

                    } else {
                        console.log(props.history);
                        props.history.push('/login')
                    }
                }
        })
    }, [pathname, props.history])

    return (
        <div></div>
    )
}

export default withRouter(AuthRoute)