const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const categorySchema = new Schema({
    id: {
        type: String,
        required: true,
        index: true,
    },
    name: {
        type: String,
        required: [true, 'missing name']
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

categorySchema.index({ name: 1});
module.exports = mongoose.model('categories', categorySchema)
