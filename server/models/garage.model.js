const mongoose = require("mongoose");

const GarageSchema = new mongoose.Schema(
	{
		location: {
			type: String,
			required: [true, "A location is required"],
			street: {
				type: String,
				required: [true, "A street address is required"],
			},
			city: {
				type: String,
				required: [true, "A city is required"],
			},
			zipcode: {
				type: Number,
				required: [true, "A zipcode is required"],
			},
		},
		//use .toLocalDateString() and .toLocalTimeString()
		datetime: {
			type: Date,
			required: [true, "A date and time is required"],
		},
	},
	{ timestamps: true }
);

const Garage = mongoose.model("Garage", GarageSchema);

module.exports = Garage;