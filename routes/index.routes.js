const router = require("express").Router();
const Book = require('../models/Book.model')


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});











// router.get('/books/:id', async (req, res, next) => {
//   let book = await Book.findById(req.params.id)
//   console.log("this is the book", book);
//   res.render('/book', { book })
// });





module.exports = router;
