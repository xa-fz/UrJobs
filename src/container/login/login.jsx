import React from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';

const Login = (props) => {

    const Register = () => {
        props.history.push('/register')
    }
    return (
        <>
            <h2>登录页</h2>
            <WingBlank>
                <List>
                    <InputItem>用户：</InputItem>
                    <InputItem>密码：</InputItem>
                </List>
                <Button type="primary">登录</Button>
                <WhiteSpace />
                <Button onClick={() => Register()} type="primary">注册</Button>
            </WingBlank>
        </>
        
    )
}

export default Login