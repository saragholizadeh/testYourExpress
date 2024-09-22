const express = require("express");
const app = express();

// Sample route
app.get('/api/users', (req, res) => {
    res.json([{ name: 'Sara' }, { name: 'John' }]);
  });

  module.exports = app; // Export app for testing

  if (require.main === module) {
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  }