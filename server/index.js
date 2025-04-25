const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Registration = require("./models/Registration");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection URI
const mongoURI =
  "mongodb+srv://mayursingh9112001:NGsAKcCEYhPD0dxK@cluster0.qou0sza.mongodb.net/";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, {
  })
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// POST Route for Registration
app.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const newEntry = new Registration(data);
    await newEntry.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
