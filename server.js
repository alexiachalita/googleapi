const express = require("express");
const path = require("path");
require ('dotenv').config();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Book = require('./models/Book');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true,  useUnifiedTopology: true } ,()=> console.log("MongoDB connected..."))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get('/api/books', (req, res)=> {
  Book.find({})
    .then(books => res.status(200).send(books))
    .catch(err => res.status(401).send({ err }));
});

app.post('/api/books', (req, res)=>{
  console.log(req.body);
  const { title, authors, description, image, link} = req.body;
  const book = new Book({title, authors, description, image, link});
  book.save(function(err, book) {
      if (err) return err => res.status(401).send({err});
      return res.status(200).send(book);
  });
});

app.delete('/api/books/:id', (req,res)=> {
  let id = req.params.id;
  Book.findByIdAndDelete(id)
  .then(book => res.status(200).send(book))
  .catch(err => res.status(401).send({ err }));
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
