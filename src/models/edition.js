const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const editionSchema = new Schema({
    id: {
        type: String,
        require: true,
        index: true,
    },
    title:{
        type: String,
        require:[true, 'missing title']
    },
    link:{
        type:String,
        require: [true,'missing link']
    },
    excerpt:{
        type:String,
        require:[true,'missing excerpt']
    },
    writers: {
        type: String,
        require: [true, 'missing writers']
    },
    publisher: {
        type: String,
        require:[true, 'missing publisher']
    },
    type: {
        type: String,
        require: [true, 'missing type']
    },
    date:{
        type:String,
        require:[true, 'missing']
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
editionSchema.index({ type: 1 });
module.exports = mongoose.model('editions', editionSchema)
