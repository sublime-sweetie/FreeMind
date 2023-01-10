const express = require('express')
const app = express()
const mysql = require('mysql')

app.use(express.urlencoded({extended: false}));

app.use(express.static('./public'))

const router = require('.routes/user.js')

app.use(router)

app.get('/', (req, res) =>{
    res.send("Welcome to our homepage.")
})

app.get('/', (req, res) =>{
    res.send("Thank you for joining us")
})

app.listen(4000);