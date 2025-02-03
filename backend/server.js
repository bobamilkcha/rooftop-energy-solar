const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

const User = require("./models/User");

/*API Route*/
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const newUser = new User({ name, email, phone });
    await newUser.save();

    res.status(201).json({ message: "User saved successfully!" });

  } catch (error) {
    res.status(500).json({ error: "Failed to save User" });
  }
});

