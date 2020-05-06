//Requiring dependencies 
const path = require("path");
const router = require("express").Router();
//Requiring book route
const bookRoutes = require("./books");
//requireing google route
const googleRoutes = require("./google");

// Book routes
router.use("/books", bookRoutes);

// Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
//export as a router to be used in index.js (in routes folder)
module.exports = router;
