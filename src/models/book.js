const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({
    id: {
        type: String,
        require: true,
        index: true,
    },
    title: {
        type: String,
        default: 'new book'
    },
    titleWords: {
        type: [String],
        titleWords: ['new', 'book']
    },
    shortContent: {
        type: String,
        default: 'new book'
    },
    shortContentWords: {
        type: [String],
        default: ['new', 'book']
    },
    content: {
        type: String,
        default: 'new book'
    },
    excerpt: {
        type: String,
        default: 'newbook'
    },
    authors: {
        type: [String],
        default: ['new', 'book']
    },
    writers: {
        type: [String],
        default: ['new', 'book']
    },
    categories: {
        type: [String],
        default: ['new', 'book']
    },
    tags: {
        type: [String],
        default: ['new', 'book']
    },
    size: {
        type: Number,
        default: 0
    },
    publisher: {
        type: String,
        default: 'new book'
    },
    published: {
        type: Date,
        default: Date.now()
    },
    pages: {
        type: Number,
        default: 0
    },
    language: {
        type: [String],
        default: ['new', 'book']
    },
    formats: {
        type: [String],
        default: ['new', 'book']
    },
    biIsbn: {
        type: String,
        default: 'new book'
    },
    biFileUrl: {
        type: String,
        default: 'new book'
    },
    status: {
        type: String,
        enum: ['enabled', 'disabled'],
        require: true,
        default: 'enabled',
    },
    archived: {
        type: Number,
        enum: [0, 1],
        require: true,
        default: 0,
    },
    bookStatus: {
        type: String,
        enum: ['activated', 'unactivated'],
        require: true,
        default: 'activated'
    },
    source: {
        type: [String]
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

bookSchema.index({ categories: 1 }, { tags: 1 });

module.exports = mongoose.model('books', bookSchema)