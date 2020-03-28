// import required data
const friends = require('../data/friends');

// export routes
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        const userInput = req.body;

        // get scores
        for (let i = 0; i < userInput.scores.length; i++) {
            userInput.scores[i] = parseInt(userInput.scores[i]);
        }

        // set default friend 
        let bestFriend = 0;
        let minDifference = 50;

        for (let i = 0; i < friends.length; i++) {
            let totalDiff = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
                let difference = Math.abs(userInput.scores[j] - friends[i].scores[j]);
                totalDiff += difference;
            }
            if (totalDiff < minDifference) {
                // if there is a new minimum, set bestFriend index to current friend and set the new minDifference
                bestFriend = i;
                minDifference = totalDiff;
            }
        }

        //  after completing the loop and finding the best match, add user to friends then send bestFriend result in the response
        friends.push(user);
        res.json(friends[bestFriend]);
    });
};