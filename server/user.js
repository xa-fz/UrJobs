// 属于/user后的请求路由

const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user');
const utils = require('utility');
const _filter = {pwd: 0, __v: 0};

Router.get('/list', (_req, res) => {
    // User.remove({}, () => {}); // 删掉数据库中的所有账户密码信息
    User.find({}, (_err, doc) => {
        return res.json(doc)
    })
})

Router.post('/login', (req, res) => {
    const { user, pwd } = req.body;
    User.findOne({user, pwd: utils.md5(pwd)}, _filter, (_err, doc) => {
        if(!doc) {
            return res.json({code: 1, msg: '用户名或密码错误'})
        }
        res.cookie('userid', doc._id);
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
        const userModel = new User({user, pwd: utils.md5(pwd), type})
        userModel.save((e, d) => {
            if (e) {
                return res.json({code: 1, msg: '查询错误'})
            }
            const { user, type, _id } = d;
            res.cookie('userid', _id);
            return res.json({code: 0, data: {user, type, _id}})
        })
        // 不在create中存储cookie因为创建完成后id才会生成
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

Router.get('/info', (req, res) => {
    const { userid } = req.cookies;
    if (!userid) {
        return res.json({ code: 1 })
    }
    User.findOne({_id: userid}, _filter, (err, doc) => {
        if (err) {
            return res.json({code: 1, msg: '查询错误'})
        }
        if (doc) {
            return res.json({code: 0, data: doc})
        }
    })
})

module.exports = Router