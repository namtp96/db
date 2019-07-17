const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const languageSchema = new Schema({
    id: {
        type: String,
        required: true,
        index: true,
    },
    language: {
        type: String,
        required: [true, 'missing language']
    },
    a2Code:{
        type:String,
        required:[true,'missing  alpha 2 code']
    },
    a3Code:{
        type:String,
        required:[true,'missing  alpha 3 code']
    },
    numCode:{
        type:Number,
        required:[true,'missing number code']
    },
    phoneCode:{
        type:Number,
        required:[true,'missing phone code']
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
})
languageSchema.index({ language: 1});
module.exports = mongoose.model('languages', languageSchema);