const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "First name is required"],
		minlength: [2, "First name must be 2 characters"]
	},
	age: Number,
},{timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;