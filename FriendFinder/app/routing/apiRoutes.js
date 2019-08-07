var friends = require('../data/friends.js');

module.exports = function (app) {


    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        if (friends.length < 5) {
            friends.push(req.body);
            res.json(true);
        }
    });

    app.post("/api/clear", function (req, res) {
        friends.length = 0;

        res.json({ ok: true });
    });
};