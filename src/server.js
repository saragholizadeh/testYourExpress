const express = require("express");
const app = express();
require("dotenv").config();
const taskRoutes = require('./routes/task.route');// Sample route
app.use('/task', taskRoutes)

module.exports = app; // Export app for testing

if (require.main === module) {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}
