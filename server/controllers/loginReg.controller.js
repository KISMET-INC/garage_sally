const User = require("../models/user.model");
const bcrypt = require('bcrypt');

module.exports.loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if(user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }

    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if(!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }
    return res.json(user)

};
