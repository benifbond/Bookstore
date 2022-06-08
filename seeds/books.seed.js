const books = [
    {
      title: 'The Usborne Book of World History',
      author: 'Jenny Tyler',
      image:
        'https://www.sonlight.com/images/products/CH02-l.jpg',
      description:
        "Presents an introduction to world history, from prehistoric peoples through ancient civilizations to the early twentieth century, focusing on the varying cultures, art, and daily life of civilizations throughout history.",
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
        title: 'Very Nice',
        author: 'Maria Rinkel',
        image:
          'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-july-2019/large/bbcjuly19verynice.jpg?1384968217',
        description:
          "Begin your journey with the castle of history",
    },
    {
        title: 'Shutter Stock',
        author: 'Augustus Caesar',
        image:
          'https://image.shutterstock.com/image-vector/vintage-book-cover-vector-illustration-600w-685836277.jpg',
        description:
          "Begin your journey with the castle of history",
    },
    {
        title: 'Brother Karamazov',
        author: 'Feodor Dostoevsky',
        image:
          'images/BroKa.png',
        description:
          "Completed only two months before his death, The Brothers Karamazov is Dostoevsky's largest, most expanisve, most life-embracing work.Filled with human passions -- lust, greed, love, jealousy, sorrow and humor -- the book is also infused with moral issues and the issue of collective guilt. As in many of Dostoevsky's novels, the plot centers on a murder.",
    },
    {
        title: 'The War Between Us',
        author: 'Sara Lee',
        image:
          'https://m.media-amazon.com/images/I/51kjvCihacL.jpg',
        description:
          "Alex Moon is not the enemy. Six months after Pearl Harbor's tragedy, Korean American Alex Moon is sent away from his home in California for refusing his father's request to join the fight against the Japanese. On his journey, Alex is attacked and stranded in the small town of River Bluff, Indiana. To everyone surrounding him, he looks like the enemy.",
    },
    {
        title: 'Prospect Of A Woman',
        author: 'Vendy Voorsanger',
        image:
          'https://img.buzzfeed.com/buzzfeed-static/static/2020-08/25/0/asset/81d098e7de23/sub-buzz-12918-1598313727-5.jpg?downsize=600',
        description:
          "Elisabeth Parker comes to California from Massachusetts in 1849 with her new husband, Nate, to reunite with her father, who’s struck gold on the American River. But she soon realizes her husband is not the man she thought―and neither is her father, who abandons them shortly after they arrive. As Nate struggles with his sexuality, Elisabeth is forced to confront her preconceived notions of family, love, and opportunity. She finds comfort in corresponding with her childhood friend back home, writer Louisa May Alcott, and spending time in the company of a mysterious California",
    },
    {
        title: 'Untenrum Frei',
        author: 'Margarete Stokowski',
        image:
          'https://images-eu.ssl-images-amazon.com/images/I/41KpQOZJfuS._SY264_BO1,204,203,200_QL40_ML2_.jpg',
        description:
          "SEX. MACHT. SPASS. UND PROBLEME. In ihrem Debüt «Untenrum frei» schreibt die Autorin und Spiegel-Online-Kolumnistin Margarete Stokowski über die kleinen schmutzigen Dinge und über die großen Machtfragen. Es geht darum, wie die Freiheit im Kleinen mit der Freiheit im Großen zusammenhängt, und am Ende wird deutlich: Es ist dieselbe. Mit scharfsinnigem Blick auf die Details gelingt ihr ein persönliches, provokantes und befreiendes Buch.",
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