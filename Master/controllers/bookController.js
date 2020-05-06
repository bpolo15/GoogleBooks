//Requiring the models folder
const db = require("../models");

// Defining methods for the bookController
module.exports = {
  //using the findAll method to find all books 
  findAll: function(req, res) {
    //Using the find method in the book model
    db.Book.find(req.query)
    //if successful, provide a json object with the book information 
      .then(dbBook => res.json(dbBook))
      //if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  },
  //using findById method to find one book (based on id)
  findById: function(req, res) {
    db.Book.findById(req.params.id)
    //use the findById method in the book model to find one book and display the infomration in a json object
      .then(dbBook => res.json(dbBook))
       //if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
    //use create method in Book model to create new book
      .then(dbBook => res.json(dbBook))
      //if successful, provide a response of the book information in a json object
       //if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
    //use the findOneAndUpdate method in the book model
    //pass in the id of the book from the URL parameter
      .then(dbBook => res.json(dbBook))
      //pass in the new infomration form the update in the req.body
       //if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  },
  //method to remove a book
  remove: function(req, res) {
    //use the findById and remove methods from the book model
    //pass in the id of the book from the URL parameter (req.params.id)
    db.Book.findById(req.params.id)
    //if successful, remove the book
      .then(dbBook => dbBook.remove())
      //after book is removed, provide a response of the book infomration in a json object
      .then(dbBook => res.json(dbBook))
       //if unsuccessful, provide an error message
      .catch(err => res.status(422).json(err));
  }
};
