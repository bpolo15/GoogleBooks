//require dependencies
//mongoose npm
//Schema is a template for creating the model (from mongoose library)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the book Schema
//the book schema includes a title, subtitle, author, link, description, image, and googleID
//It also shows what datatype each key will be

const bookSchema = new Schema({
  //title is a string, and it will be required
  title: { type: String, required: true },
  //subtitle is a string, it is not required
  subtitle: { type: String },
  //authors is a string, and it is required
  authors: { type: [String], required: true },
  //link is a string, and it is required
  link: { type: String, required: true },
  //description is a string, and it is required
  description: { type: String, required: true },
  //image is a string and it is required
  image: { type: String, required: true },
  //googleId is a string, it is required, and it must be unique
  googleId: { type: String, required: true, unique: true }
});
//defining a const named Book which will reference mogoose's model method and be named "Book"
const Book = mongoose.model("Book", bookSchema);

//Exporting the book model to be used in the index.js
module.exports = Book;
