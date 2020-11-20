const Garage = require("../models/garage.model");

module.exports.findAllGarages = (req, res) => {
    Garage.find()
        .then((allDaGarages) => res.json({garages: allDaGarages }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleGarage = (req, res) => {
    Garage.findOne({ _id: req.params.id })
        .then((oneSingleGarage) => res.json({ garage: oneSingleGarage }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createGarage = (req, res) => {
    Garage.create(req.body)
        .then((newGarage) => res.json({ garage: newGarage }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingGarage = (req, res) => {
    Garage.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
		.then((updatedGarage) => res.json({ garage: updatedGarage }))
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingGarage = (req, res) => {
    Garage.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

//Special "Unique" routes

module.exports.createUniqueGarage = (req, res) => {
    Garage.exists({ email: req.body.email })
        .then((GarageExits) => {
            if (GarageExits) {
                return Promise.reject("Garage Exists");}
            return Garage.create(req.body).then((s) => res.json({ success: true }));
        }).catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateUniqueExistingGarage = (req, res) => {
    Garage.exists({ title: req.body.title })
        .then((GarageExists) => {
            if (GarageExists) {
                Garage.findOne({ email: req.body.email })
                    .then((foundGarage) => {
                        if (req.params.id != foundGarage._id) {
                            return Promise.reject("Garage Exists");
                        }
                        return Garage.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                            .then((s) => res.json({ success: true }))
                            .catch((err) => console.log(err))
                    })
                    .catch((err) => res.json({ message: "Something went wrong", error: err }));
            } else {
                return Garage.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                    .then((s) => res.json({ success: true }))
                    .catch((err)=> console.log(err))
            }
        })
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
