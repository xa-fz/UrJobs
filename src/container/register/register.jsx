import React, { useMemo, useState, useCallback } from 'react';
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile';
import { register } from '../../redux/user.redux';
import { connect } from 'react-redux';

const RadioItem = Radio.RadioItem;

const Register = (props) => {
    const types = useMemo(() => [
        {
            key: 'Boss', name: '招聘者'
        },
        {
            key: 'Hunter', name: '求职者'
        }], [])
    const [human_type, set_human_type] = useState('Hunter');
    const [username, set_username] = useState('');
    const [pwd, set_pwd] = useState('');
    const [repeatPwd, set_repeatPwd] = useState('');
    const {
        register,
        user
    } = props;

    const handleRegister = useCallback(() => {
        console.log();
        register({user: username, pwd, repeatPwd, type: human_type})
    }, [username, pwd, repeatPwd, human_type, register])

    console.log();

    return (
        <>
            <h2>注册页</h2>
            <List>
                {
                    user.msg ? <p className="error-msg">{user.msg}</p> : ''
                }
                <InputItem onChange={v => {
                    set_username(v)
                }}>用户：</InputItem>
                <InputItem type="password" onChange={v => {
                    set_pwd(v)
                }}>密码：</InputItem>
                <InputItem type="password" onChange={v => {
                    set_repeatPwd(v)
                }}>确认密码：</InputItem>
                <WhiteSpace />
                {
                    types.map(t => 
                        <RadioItem key={t.key} onChange={() => set_human_type(t.key)} checked={t.key === human_type}>
                            {t.name}
                        </RadioItem>
                    )
                }
                <Button type="primary" onClick={() => handleRegister()}>注册</Button>
            </List>
        </>
    )
}

function mapStateToProps (state) {
    console.log(state);
    return {
        user: state.user
    }
}
const mapDispatchToProps = {
    register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)