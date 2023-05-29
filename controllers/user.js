const { models: { user } } = require('../models');

module.exports = {
    create: async (req, res) => {
        const { username, password } = req.body;

        await User.create({
            superID,
            userID,
            username,
            password
        });

        res.render('profile', { username });
    }
}
