const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/task.route");
require("dotenv").config();

const app = express();

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/tasks", itemRoutes);

module.exports = app;
