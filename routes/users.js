var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://poorvanshi_sahu:poorv07@cluster0.wteyc.mongodb.net/?retryWrites=true&w=majority").then(() => {
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