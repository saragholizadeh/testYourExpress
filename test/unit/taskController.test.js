const { create, all } = require('../../src/controllers/task.controller');
const Task = require('../../src/models/task.model');

jest.mock('../../src/models/task.model'); 

describe('Task Controller - Unit Tests', () => {
  let req, res;

  beforeEach(() => {
    req = { body: { title: 'Test Task',createdAt: Date.now()} };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  });

  it('should return all tasks', async () => {
    const tasks = [{ title: 'Task 1' }, { title: 'Task 2' }];
    Task.find = jest.fn().mockResolvedValue(tasks);

    await all(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(tasks);
  });
});