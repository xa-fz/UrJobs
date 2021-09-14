import React from 'react';
import { connect } from 'react-redux';
import { login, getUser } from './redux';
import { Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    componentDidMount () {
        this.props.getUser();
    }
    render () {
        const { user, age } = this.props;
        return (
            <div>
                <h2>我的名字：{user}, 年龄是：{age}</h2>
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
        isAuth: auth.isAuth,
        user: auth.user,
        age: auth.age
    }
}
// 方法
const actionCreators = {
    login,
    getUser
}
export default connect(mapStatetoProps, actionCreators)(Auth);