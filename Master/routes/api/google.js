//require dependencies
const router = require("express").Router();
//Require good controller
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  .route("/")
  //connected to the route route
  //get method to find return a json of the object array
  .get(googleController.findAll);

  //export the router to be used by the index.js
module.exports = router;
