const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, "Cannot be left blank"],
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
      index: true,
    },
    contactNumber: [{ type: String }],
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator, { message: "Already taken." });

module.exports = mongoose.model("Users", userSchema);
