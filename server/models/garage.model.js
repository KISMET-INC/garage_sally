const mongoose = require("mongoose");

const GarageSchema = new mongoose.Schema(
	{
		location: {
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
		//use .toLocalDateString(),  .toLocalTimeString(), .toLocaleString("en-US", { timeZone: "PST" })
		datetime: {
			type: Date,
			default: Date.now,
			min: "1987-09-28",
			max: "2025-05-23",
			// required: [true, "A date and time is required"],
		},
	},
	{ timestamps: true }
);

const Garage = mongoose.model("Garage", GarageSchema);

module.exports = Garage;
