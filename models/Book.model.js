const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    image: String,
    description: String,
    isBorrowed: Boolean,
},

);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;