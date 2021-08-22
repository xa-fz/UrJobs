const express = require('express')
const mongoose = require('mongoose')
// 连接mongodb并且使用Urjob集合
const DB_Url = 'mongodb://localhost:27017/Urjob'
mongoose.connect(DB_Url)
mongoose.connection.on('connected', function() {
    console.log('mongodb connect sucess')
})
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))
// 新增数据
// User.create({
//     user: 'Jerry',
//     age: 20
// }, function(err, doc) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })

// User.remove({
//     age: 20
// }, function(err, doc) {
//    console.log(doc)
// })

// User.update({'user': 'Jerry'}, {'$set': {age: 21}}, function(err, doc) {
//    console.log(doc)
// })

const app = express()
app.get('/', function (req, res) {
    res.send('<div>hello world!!</div>')
})
app.get('/data', function (req, res) {
    User.find({user: 'Jerry'}, function(err, doc) {
        res.json(doc)
    })
    // res.json({age: 18, name: 'tom'})
})
app.listen(9093, function() {
    console.log('success!')
})