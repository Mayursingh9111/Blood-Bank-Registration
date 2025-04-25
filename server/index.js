require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Registration = require("./models/Registration");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.mongoURI;

mongoose
  .connect(mongoURI, {})
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


app.post("/register", async (req, res) => {
  try {
    const newUser = new Registration(req.body);
    await newUser.save();
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error while saving user:", error); // Log the full error
    if (error.name === "ValidationError") {
      // If it's a validation error, return detailed validation messages
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
