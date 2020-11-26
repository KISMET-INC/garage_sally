const mongoose = require("mongoose");

const GarageSchema = new mongoose.Schema(
	{
		streetNumber: {
			type: Number,
			required: [true, "A street number is required"],
		},
		streetName: {
			type: String,
			required: [true, "A street name is required"],
		},
		city: {
			type: String,
			required: [true, "A city name is required"],
		},
		zipcode: {
			type: Number,
			required: [true, "A zipcode is required"],
		},
		// .toLocaleDateString("en-US").split("/")
		// .toLocaleTimeString("en-US").split(/:/)
		// .toLocaleString("en-US", { timeZone: "PST" })
		date: {
			type: Date,
			required: [true, "A date is required"],
			// min: Date.now
		},
		startTime: {
			type: String,
			required: [true, "A start time is required"],
			// min: Date.now
		},
		stopTime: {
			type: String,
			required: [true, "A stop time is required"],
			// min: Date.now
		},
		image: {
			type: String,
			data: Buffer,
		},
	},
	{ timestamps: true }
);

const Garage = mongoose.model("Garage", GarageSchema);

module.exports = Garage;