const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const userSchema = new Schema({
    id:{
        type:String,
        required:[true,'missing id'],
        index:true,
    },
    firstName:{
        type:String,
        required:[true,'missing first name']
    },
    lastName:{
        type:String,
        required:[true,'missing las name']
    },
    username:{
        type:String,
        minLength:[4,'name to short'],
        maxLength:[50,'name to long'],
        required:[true, 'missing username'],
        index: true
    },
    email: {
        type: String,
        required: [true, 'missing email'],
        index:true

    },
    password:{
        type:String,
        required:[true, 'missing password']
    },
    gender: {
        type: String,
        required: [true, 'missing gender']
    },
    age: {
        type: Number,
        required: [true, 'missing age']
    },
    birthday:{
        type:Date,
        required:[true, 'missing birthday']
    },
    phone: {
        type: String,
        required: [true, 'missing phone'],
        index:true
    },
    address: {
        type: String,
        required: [true, 'missing address']
    },
    countryCode:{
        type:String,
        required:[true, 'missing country code']
    },
    image: {
        type: String,
        required: [true, 'missing image']
    },
    archived:{
        type:Number,
        enum:[0,1],
        required:[true, 'missing archived'],
        default: 0
    },
    status:{
        type: String,
        enum: ['activated','unactivated','locked','pending','deleted'],
        required:[true,'missing status'],
        default: 'pending'
    },
    createAt:{
        type:Date,
        default: Date.now()
    },
    updateAt:{
        type:Date,
        default: Date.now()
    }
})
userSchema.index({username:1},{email: 1},{phone: 1});
module.exports = mongoose.model('users', userSchema)
