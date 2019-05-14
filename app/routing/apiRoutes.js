var friendData = require("../data/friends.js");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    })

    app.post("/api/friends", function (req, res) {


        var newScores = req.body.scores;
        console.log(newScores);
        var topMatch = 100;
        var bestFriend;

        friendData.forEach(function (friend) {
            console.log(friend);
            var totalDifference = 0;
            newScores.forEach(function (score) {
                totalDifference += Math.abs(parseInt(friend.scores) - parseInt(score));
                console.log(score);

                if (totalDifference <= topMatch) {
                    topMatch = totalDifference;
                    bestFriend = friend;
                }
            });
            console.log(totalDifference);
        });
        console.log(bestFriend);

        res.json(bestFriend);

        friendData.push(req.body);
    })
}