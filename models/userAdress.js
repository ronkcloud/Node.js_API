const mongoose = require('mongoose')

const userAdressSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    userAdress:{
        type: String,
        required: true 
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('UserAdress', userAdressSchema)