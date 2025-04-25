const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: String,
  contact: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  lastDonationDate: String,
  medicalComplications: String,
  state: { type: String, required: true },
  city: { type: String, required: true },
  pin: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Registration", registrationSchema);
