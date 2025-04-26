const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  contact: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  lastDonation: { type: String, required: true },
  complications: { type: String, default: "None" },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pin: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Registration", registrationSchema);
