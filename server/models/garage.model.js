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

		date: {
			type: Date,
			required: [true, "A date is required"],
		},

		time: {
			type: Date,
			required: [true, "A time is required"],
		},
	},
	{ timestamps: true }
);

const Garage = mongoose.model("Garage", GarageSchema);

module.exports = Garage;