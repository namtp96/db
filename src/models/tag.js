const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const tagSchema = new Schema({

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
tagSchema.index({name:1});
module.exports = mongoose.model('tags', tagSchema)
