const mongoose = require("mongoose");

const GarageSchema = new mongoose.Schema(
	{
		location: {
			type: String,
			required: [true, "A street address is required"],
		},
		zipcode: {
			type: Number,
			required: [true, "A zipcode is required"]
		},
		//use .toLocalDateString(),  .toLocalTimeString(), .toLocaleString("en-US", { timeZone: "PST" })
		datetime: {
			type: Date,
			required: [true, "A date and time is required"],
			min: Date.now
		},
	},
	{ timestamps: true }
);

const Garage = mongoose.model("Garage", GarageSchema);

module.exports = Garage;