require('dotenv').config() 

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userAdressRouter = require('./routes/userAdress')
const homeRouter = require('./routes/home')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', ()=> console.log('Connected to database'))

app.set('view engine', 'ejs')
app.use(express.json())
app.use('/userAdress', userAdressRouter)
app.use('/', homeRouter)

app.listen(process.env.PORT || 5000,()=>console.log('Server started'))