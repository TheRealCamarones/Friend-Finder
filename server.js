// boilerplate server code
var express = require("express");

var app = express();

var PORT = process.env.PORT || 5309;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// give our server the routes in our file tree
// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});