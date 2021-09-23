import React, { useMemo, useState } from 'react';
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

const Register = () => {
    const types = useMemo(() => [
        {
            key: 'Boss', name: '招聘者'
        },
        {
            key: 'Hunter', name: '求职者'
        }], [])
    const [human_type, set_human_type] = useState('Hunter');
    return (
        <>
            <h2>注册页</h2>
            <List>
                <InputItem>用户：</InputItem>
                <InputItem>密码：</InputItem>
                <InputItem>确认密码：</InputItem>
                <WhiteSpace />
                {
                    types.map(t => 
                        <RadioItem key={t.key} onChange={() => set_human_type(t.key)} checked={t.key === human_type}>
                            {t.name}
                        </RadioItem>
                    )
                }
                <Button type="primary">确认</Button>
            </List>
        </>
    )
}

export default Register