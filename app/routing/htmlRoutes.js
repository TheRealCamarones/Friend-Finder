var path = require("path");

module.exports = function(app) {

    // ensuring we have a route set up for / path
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })

    // this route will send us to the survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // and this route will automatically send us to home.html for anything other than survey
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}