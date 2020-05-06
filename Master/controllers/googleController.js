//Require dependencies 
//axios to do the API calls
const axios = require("axios");
//access to models folder
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    //requeest is the deconstructed object which is the query and parameters for the search
    const { query: params } = req;
    axios
    //API call to Google books api with the parameters
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      //once successful, filter the results to include title, infolink, authors, descriptions, imagelinks and imagelinks thumbnail
      .then(results =>
        results.data.items.filter(
          result =>
          //create a new array containing the filtered information 
          //creates the following keys: title, infolink, authors, description, imageLinks, thumbnail
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      //the new filtered array is going to apiBooks
      //once successful, object with the keys that were just created will utilize the method from the book model
      //check that all the books returned have the necessary information 
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      //if all the keys have a value, send the response as a json object
      .catch(err => res.status(422).json(err));
      //if unsuccessful send an error message
  }
};
