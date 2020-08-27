const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const responseSchema = new Schema({

    no: {type: Number,unique: true, default: 0},
    details: {type: String,  default: ''},
    docno: {type: String,  default: ''},
    debit: {type: Number, default: 0},
    credit: {type: Number, default: 0},
    closingbalance: {type: Number, default: 0},
    status: {type: String,  default: 'pending'},
    user:{type: String,default: ''}

})

// Define schema methods


// Define hooks for pre-saving


const Response = mongoose.model('Response', responseSchema)
module.exports = Response