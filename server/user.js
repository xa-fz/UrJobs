// 属于/user后的请求路由

const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user');

Router.get('/list', (_req, res) => {
    User.find({}, (_err, doc) => {
        return res.json(doc)
    })
})

Router.post('/register', (req, res) => {
    const {user, pwd, type} = req.body;
    // 查询用户是否在库中存在
    User.findOne({user}, (err, doc) => {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        User.create({user, pwd, type}, (e, d) => {
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