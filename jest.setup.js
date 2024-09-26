// jest.setup.js

// If you're using a real MongoDB for testing, you might need to connect to a test database.
// Otherwise, you could mock the MongoDB client.
// Here, we'll assume using a real test database.

const mongoose = require("mongoose");
require("dotenv").config();

// Before any tests run, we connect to the test database
beforeAll(async () => {
  await mongoose.connect(process.env.TEST_DB_URL, { });
});

// After all tests have run, we close the database connection
afterAll(async () => {
  await mongoose.connection.close();
});


jest.spyOn(console, "warn").mockImplementation(() => {});
jest.spyOn(console, "error").mockImplementation(() => {});
