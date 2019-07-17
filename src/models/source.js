const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const sourceSchema = new Schema({
    id: {
        type: String,
        required: true,
        index: true,
    },
    site: {
        type: String,
        required:[true,'missing site']
    },
    link : {
        type: String,
        required: [true, 'missing link']
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
sourceSchema.index({ site: 1});
module.exports = mongoose.model('sources', sourceSchema)
