import React, { useState, useCallback } from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { login } from '../../redux/user.redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = (props) => {
    const { user, login } = props;
    const [login_info, set_login_info] = useState({
        user: '',
        pwd: ''
    })

    const Register = () => {
        props.history.push('/register')
    }

    const getLogin = useCallback(() => {
        login(login_info)
    }, [login_info, login])

    return (
        <>
            { user.redirectTo ? <Redirect to={user.redirectTo} /> : null }
            <h2>登录页</h2>
            <WingBlank>
                <List>
                    {
                        user.msg ? <p className="error-msg">{user.msg}</p> : ''
                    }
                    <InputItem onChange={u => {
                        set_login_info((currentState) => ({...currentState, user: u}))
                    }}>用户：</InputItem>
                    <InputItem onChange={p => {
                        set_login_info((currentState) => ({...currentState, pwd: p}))
                    }}>密码：</InputItem>
                </List>
                <Button type="primary" onClick={() => getLogin()}>登录</Button>
                <WhiteSpace />
                <Button onClick={() => Register()} type="primary">注册</Button>
            </WingBlank>
        </>
        
    )
}
function mapStateToProps (state) {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)