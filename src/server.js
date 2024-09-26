const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const taskRoutes = require("./routes/task.route");

// Routes
app.use("/task", taskRoutes); 

// Export app for test module
module.exports = app;

if (require.main === module) {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}
