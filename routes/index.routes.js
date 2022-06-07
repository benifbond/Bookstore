const router = require("express").Router();
const Book = require('../models/Book.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/books', async (req, res, next) => {
  let allBooks = await Book.find()
  console.log("ALL BOOOOOOOkS", allBooks);
  res.render('books', { allBooks })
});

router.get('/books/:id', async (req, res, next) => {
  let allBooks = await Book.find()
  let data = res.send(req.params['id'])
  let book = allBooks[data]
  res.render('oneBook', { book })
});







module.exports = router;
