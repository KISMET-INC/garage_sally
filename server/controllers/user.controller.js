const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allDaUsers) => res.json({ users: allDaUsers }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then((oneSingleUser) => res.json({ user: oneSingleUser }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then((newlyCreatedUser) => res.json({ user: newlyCreatedUser }))
        .catch((err) => res.json({ message: "Something went wrongs", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
		.then((updatedUser) => res.json({ user: updatedUser }))
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createUniqueUser = (req, res) => {
    User.exists({ email: req.body.email })
        .then((UserExits) => {
            if (UserExits) {
                return Promise.reject("User Exists");}
            return User.create(req.body).then((s) => res.json({ success: true }));
        }).catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateUniqueExistingUser = (req, res) => {
    User.exists({ title: req.body.title })
        .then((UserExists) => {
            if (UserExists) {
                User.findOne({ email: req.body.email })
                    .then((foundUser) => {
                        if (req.params.id != foundUser._id) {
                            return Promise.reject("User Exists");
                        }
                        return User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                            .then((s) => res.json({ success: true }))
                            .catch((err) => console.log(err))
                    })
                    .catch((err) => res.json({ message: "Something went wrong", error: err }));
            } else {
                return User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                    .then((s) => res.json({ success: true }))
                    .catch((err)=> console.log(err))
            }
        })
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
