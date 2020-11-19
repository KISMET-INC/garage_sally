const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "A name is required"],
			minlength: [2, "A name must be at least 2 letters"],
		},
		email: {
			type: String,
			required: [true, "An email is required"],
			validate: {
				validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
				message: "Please enter a valid email",
			},
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [8, "Password must be at least 8 characters"],
		},
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
		image: {
			type: String
		}
	},
	{ timestamps: true }
);

UserSchema.virtual("confirmPassword")
	.get(() => this._confirmPassword)
	.set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate("confirmPassword", "Password must match confirm password");
	}
	next();
});

UserSchema.pre("save", function (next) {
	bcrypt.hash(this.password, 10).then((hash) => {
		this.password = hash;
		next();
	});
});

const User = mongoose.model("User", UserSchema);

module.exports = User;