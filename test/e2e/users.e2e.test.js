const request = require('supertest');
const app = require('../../src/server');
describe('E2E: Users API', () => {
  it('should fetch users list', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ name: 'Sara' }, { name: 'John' }]);
  });
});