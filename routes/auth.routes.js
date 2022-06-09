const { Router } = require("express")
const router = new Router()
const fileUploader = require("../config/cloudinary.config")


const mongoose = require("mongoose") // <== has to be added
const bcryptjs = require("bcryptjs")
const saltRounds = 10
const Book = require("../models/Book.model")
const User = require("../models/User.model")

const { findById } = require("../models/User.model")
// router.get("/books", async (req, res, next) => {
//   let allBooks = await Book.find()
  
//   res.render("movies", { allMovies })
// });
router.get("/books/:id", async (req, res, next) => {
  const {id} = req.params.id;
  let book = await Book.findById(id)
  res.render("/oneBook", { book })
});
// GET route ==> to display the signup form to users
router.get("/signup", (req, res) => res.render("auth/signup"))
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body
  // make sure users fill all mandatory fields:
  if (!username || !email || !password) {
    res.render("auth/signup", {
      errorMessage: "All fields are mandatory. Please provide your username, email and password.",
    })
    return
  }
  // make sure passwords are strong:
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
  if (!regex.test(password)) {
    res.status(500).render("auth/signup", {
      errorMessage:
        "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
    })
    return
  }
  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create({
        username,
        email,
        passwordHash: hashedPassword,
      })
    })
    .then(userFromDB => {
      // console.log("Newly created user is: ", userFromDB);
      res.redirect("/login")
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render("auth/signup", { errorMessage: error.message })
      } else if (error.code === 11000) {
        res.status(500).render("auth/signup", {
          errorMessage:
            "Username and email need to be unique. Either username or email is already used.",
        })
      } else {
        next(error)
      }
    }) // close .catch()
})
//////////// L O G I N ///////////
router.get("/login", (req, res) => res.render("auth/login"))
router.post("/login", async(req, res, next) => {
  const { email, password } = req.body
  if (email === "" || password === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both, email and password to login.",
    })
    return
  }
  const user = await User.findOne({ email })
      if (!user?.email) {
        res.render("auth/login", { errorMessage: "Email is not registered. Try with other email." })
        return
      }
      else if (bcryptjs.compareSync(password, user.passwordHash)) {
        //******* SAVE THE USER IN THE SESSION ********//
        req.session.currentUser = user
  res.redirect('/userProfile')
} else {
        // if the two passwords DON"T match, render the login form again
        // and send the error message to the user
        res.render('auth/login', { errorMessage: 'Incorrect password.' })
      }
    })
router.get("/userProfile", async (req, res) => {
  const currentUser = req.session.currentUser;
  let allBooks = await Book.find()
  const userBooks = {
    currentUser,
    allBooks
  }
  console.log(userBooks)
  res.render("users/user-profile", { userBooks })
})
router.get("/book/:id", async (req, res, next) => {
  const bookId = req.params.id
  let oneBook = await Book.findById(bookId)
  console.log(oneBook)
  res.render("oneBook", { oneBook })
});
router.post("/logout", (req, res) => {
  req.session.destroy()
  res.redirect("/")
})


////////EXPERIMENT////////




router.get('/books',  (req, res, next) => {
  res.render('users/books/addBooks')
});

// router.post('/books' , async(req, res) =>{
//     const createBook = await Book.create(req.body)
//     console.log("this is the created book",createBook);
//   res.redirect("/addBooks",createBook )
// })
// router.get("/addBooks",(req, res)=>{
//   res.render("users/books/books")
//})

// router.get('/books/:id', async (req, res, next) => {
//   let allBooks = await Book.find()
//   let data = res.send(req.params['id'])
//   let book = allBooks[data]
//   res.render('oneBook', { book })
// });
router.post("/addBooks", fileUploader.single("image"), (req, res, next) =>{
  const {title,author,description}=req.body
  console.log("here is the reqbody and here is the req file",req.body,req.file);
  Book.create({
   title,
    author,
    description,
  // information provided in the body of our create form
	image: req.file.path // cloudinary will send us the url of the image in the req.file.path. Once that you upload an image in your create form and the element  is created , If you console.log(req.file) you will be able to see how the information of our image is provided in your console.
})
.then((createdBook) =>{
  console.log("this is the created book",createdBook);
res.redirect("/userProfile")
})
.catch((err) =>{
next(err)
})
})








module.exports = router 