var friends = require('../data/friends.js');

module.exports = function (app) {


    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        
        var difference;
        var bestMatch = {
            name: "", 
            photo: "", 
            difference: 1000
        }
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            var singleFriend = friends[i];
            difference = 0;

            for (var j = 0; j < singleFriend.scores.length; j++){
                console.log("This is the single friend's scores: " + singleFriend.scores[j])
                difference += Math.abs(parseInt(singleFriend.scores[j]) - parseInt(req.body.scores[j]))
                console.log("This is the difference: " + difference);
            }
            if (difference <= bestMatch.difference){
                bestMatch.name = singleFriend.name, 
                bestMatch.photo = singleFriend.photo, 
                bestMatch.difference = difference
            }
        }
            friends.push(req.body);
            res.json(bestMatch);
        
    });
};