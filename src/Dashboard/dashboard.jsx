import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Auth/redux';
import { Button } from 'antd-mobile';
import App from '../App';

class Dashboard extends React.Component {
    render () {
        const app = (
            <div>
                <Link to="/dashboard/home">主页</Link>
                <Link to="/dashboard/test">测试</Link>
                <Route path="/dashboard/home" component={App} />
            </div>
        )
        const redirectToLogin = <Redirect to="/login"/> 
        return (
            <div>
                <div>欢迎你, {this.props.name}</div>
                <Button onClick={() => this.props.logout()}>登出</Button>
                {
                    this.props.isAuth ? app : redirectToLogin
                }
            </div>
        )
    }
}

// state属性值
const mapStatetoProps = (state) => {
    const { auth } = state;
    return {
        isAuth: auth.isAuth,
        name: auth.name
    }
}
// 方法
const actionCreators = {
    logout
}
export default connect(mapStatetoProps, actionCreators)(Dashboard);