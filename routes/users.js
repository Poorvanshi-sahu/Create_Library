var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/library").then(() => {
    console.log("Connected")
})

var userSchema = mongoose.Schema({
    book: String,
    author: String,
    pages: Number,
    rating: Number,
    price: Number
})

module.exports = mongoose.model('user', userSchema)