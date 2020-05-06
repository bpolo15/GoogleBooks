module.exports = {
  //requiring the book model and exporting for the controllers
  //all models are compiled into index.js in the models folder so that the controllers only need to look for this particular index.js file
  Book: require("./book")
};
