const { UserColl } = require('../models');

const addUser = async (req, res) => {
    try {
        let user = await UserColl.insertMany(req.body);
        res.status(201).send(`Successfully inserted ${user}`);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    } finally {
        console.log(req.route);
        console.log(req.route.path);
        console.log(req.route.stack[0].name)
        console.log(req.body);
    };
};

module.exports = addUser;