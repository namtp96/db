const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const authorSchema = new Schema({
    id: {
        type: String,
        required: true,
        index: true,
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: [true, 'missing first name']
    },
    lastName: {
        type: String,
        required:[true, 'missing last name']
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
authorSchema.index({ username:1, email:1});
module.exports = mongoose.model('authors', authorSchema);
