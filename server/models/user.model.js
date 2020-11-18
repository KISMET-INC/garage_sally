const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "{PATH} is required"],
			minlength: [2, "{PATH} must be at least {MINLENGTH}"],
		},

		email: {
			type: String,
			required: [true, "{PATH} is required"],
			minlength: [2, "{PATH} must be at least {MINLENGTH}"],
			validate: {
				validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
				message: "Please enter a valid email",
			},
		},

		password: {
			type: String,
			required: [true, "{PATH} is required"],
			minlength: [2, "{PATH} must be at least {MINLENGTH}"],
		},
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
