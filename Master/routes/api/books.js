//Require dependencies 
const router = require("express").Router();
//Require the books controller
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
//This is our route route
router.route("/")
//Has Get method to find all books, and a post method to add a book
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id" to find individual books
router
  .route("/:id")
  //Get method to find one book
  //put method to update details from one book
  //delete method to delete one book
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);
//exporting router to be used by index.js
module.exports = router;
