const books = [
    {
      title: 'A Wrinkle in Time',
      author: 'Augustus Caesar',
      image:
        'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/11/age-of-augustus-cover.png',
      description:
        "Begin your journey with the castle of history",
    },
    {
        title: 'A Wrinkle in Time',
        author: 'Augustus Caesar',
        image:
          'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/11/age-of-augustus-cover.png',
        description:
          "Begin your journey with the castle of history",
    },
    {
        title: 'A Wrinkle in Time',
        author: 'Augustus Caesar',
        image:
          'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/11/age-of-augustus-cover.png',
        description:
          "Begin your journey with the castle of history",
    },
    {
        title: 'A Wrinkle in Time',
        author: 'Augustus Caesar',
        image:
          'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/11/age-of-augustus-cover.png',
        description:
          "Begin your journey with the castle of history",
    },
    {
        title: 'A Wrinkle in Time',
        author: 'Augustus Caesar',
        image:
          'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/11/age-of-augustus-cover.png',
        description:
          "Begin your journey with the castle of history",
    },
    {
        title: 'A Wrinkle in Time',
        author: 'Augustus Caesar',
        image:
          'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/11/age-of-augustus-cover.png',
        description:
          "Begin your journey with the castle of history",
    },
    {
        title: 'A Wrinkle in Time',
        author: 'Augustus Caesar',
        image:
          'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/11/age-of-augustus-cover.png',
        description:
          "Begin your journey with the castle of history",
    },
    {
        title: 'A Wrinkle in Time',
        author: 'Augustus Caesar',
        image:
          'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/11/age-of-augustus-cover.png',
        description:
          "Begin your journey with the castle of history",
    },
  ]


const mongoose = require("mongoose");

const Book = require("../models/Book.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/Bookstore";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Book.insertMany(books);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    console.log("closing the database")
    mongoose.connection.close();
});