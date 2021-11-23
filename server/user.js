// 属于/user后的请求路由

const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user');
const utils = require('utility');

Router.get('/list', (_req, res) => {
    // User.remove({}, () => {}); // 删掉数据库中的所有账户密码信息
    User.find({}, (_err, doc) => {
        return res.json(doc)
    })
})

Router.post('/login', (req, res) => {
    const { user, pwd } = req.body;
    User.findOne({user, pwd: utils.md5(pwd)}, {pwd: 0, __v: 0, _id: 0}, (_err, doc) => {
        if(!doc) {
            return res.json({code: 1, msg: '用户名或密码错误'})
        }
        return res.json({ code: 0, data: doc})
    })
})

Router.post('/register', (req, res) => {
    const {user, pwd, type} = req.body;
    // 查询用户是否在库中存在
    User.findOne({user}, (_err, doc) => {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        User.create({user, pwd: utils.md5(pwd), type}, (e, _d) => {
            // 后端报错
            if (e) {
                return res.json({code: 1, msg: '500'})
            }
            // 没有报错
            return res.json({code: 0})
        });
    })
})

Router.get('/info', (_req, res) => {
    return res.json({ code: 1 })
})

module.exports = Router