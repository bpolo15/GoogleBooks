//Require dependencies 
const path = require("path");
//router uses router - a method of express
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes from API folder - access to all routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
//exporting the router to be used in server.js
module.exports = router;
