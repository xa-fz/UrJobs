const mongoose = require('mongoose')
// 连接mongodb并且使用Urjob集合
const DB_Url = 'mongodb://localhost:27017/Urjob'
mongoose.connect(DB_Url)
mongoose.connection.on('connected', function() {
    console.log('mongodb connect sucess')
})