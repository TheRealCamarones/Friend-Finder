var friendData = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    })

    app.post("/api/friends", function(req, res) {
        

        var newScores = req.body.scores;
        var topMatch = 0;
        var scoresArray = [];

        friendData.forEach(function(friend) {
            var totalDifference = 0;
            newScores.forEach(function(score) {
                totalDifference += Math.abs(parseInt(friend.scores) - parseInt(score))
            });
            scoresArray.push(totalDifference);
        });

        scoresArray.forEach(function(match) {
            if (match <= match[topMatch]) {
                topMatch = match
            }
            var bestFriend = friendData[topMatch];
            res.json(bestFriend);
        })

        friendData.push(req.body);
    })
}