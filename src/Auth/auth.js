import React from 'react';
import { connect } from 'react-redux';
import { login } from './redux';
import { Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom';

class Auth extends React.Component {
    render () {
        return (
            <div>
                {
                    this.props.isAuth ? <Redirect to="/dashboard"/> :
                        <Button onClick={() => {
                            this.props.login()
                        }}>请登录</Button>
                }
            </div>
        )
    }
}
// state属性值
const mapStatetoProps = (state) => {
    const { auth } = state;
    return {
        isAuth: auth.isAuth
    }
}
// 方法
const actionCreators = {
    login
}
export default connect(mapStatetoProps, actionCreators)(Auth);