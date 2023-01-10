const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.send("Welcome to our homepage.")
})

app.get('/', (req, res) =>{
    res.send("Thank you for joining us")
})

app.listen(4000);