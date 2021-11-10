const mongoose = require('mongoose')
// 连接mongodb并且使用Urjob集合
const DB_Url = 'mongodb://localhost:27017/Urjob'
mongoose.connect(DB_Url)

// 定义字段
const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        // 头像
        avater: {type: String},
        // 简介
        'desc': {type: String},
        // 职位名称
        'title': {type: String},
        'company': {type: String},
        'money': {type: String}
    }
}

// 注册字段
for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

// 声明方法供给前端调用取值
module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}