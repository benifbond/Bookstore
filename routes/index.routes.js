const router = require("express").Router();
const Book = require('../models/Book.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/books',  (req, res, next) => {
  res.render('users/books/addBooks')
});

router.post('/books' , async(req, res) =>{
    const createBook = await Book.create(req.body)
    console.log("this is the created book",createBook);
  res.redirect("/addBooks",createBook )
})
router.get("/addBooks",(req, res)=>{
  res.render("users/books/books")
})

// router.get('/books/:id', async (req, res, next) => {
//   let allBooks = await Book.find()
//   let data = res.send(req.params['id'])
//   let book = allBooks[data]
//   res.render('oneBook', { book })
// });










// router.get('/books/:id', async (req, res, next) => {
//   let book = await Book.findById(req.params.id)
//   console.log("this is the book", book);
//   res.render('/book', { book })
// });





module.exports = router;
