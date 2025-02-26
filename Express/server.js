const express = require('express')
const app = express()
const db = require('./config/db')
const port = 3002
app.get('/', (req, res) => {
    res.send("welcome to server")
})

app.listen(port, () => {
    console.log('server is running in port : ' + port)
})
console.log('Yaswanth')
console.log('The Man, The Myth, The Legend')
console.log('SUITS')

