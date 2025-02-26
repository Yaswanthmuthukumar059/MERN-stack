const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yaswanth:yash445566@cluster0.sjrtv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const connection = mongoose.connection
connection.on('connected',()=>{console.log('db connected')})
connection.on('error',()=>{console.log('db error')})
