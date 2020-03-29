const mongoose = require('mongoose')

const CantactSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Num_tel:{
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Contacts',CantactSchema)