const request = require('supertest');
const app = require('../../src/server'); // Import the Express app

describe('GET /api/users', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ name: 'Sara' }, { name: 'John' }]);
  });
});