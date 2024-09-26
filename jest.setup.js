// jest.setup.js
jest.setTimeout(10000); // Set the timeout for tests

const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close(); // Close DB connection after tests
});