const { create, all, get, update,remove } = require('../../src/controllers/task.controller');
const Task = require('../../src/models/task.model');

jest.mock('../../src/models/task.model'); 

describe('Task Controller - Unit Tests', () => {
  let req, res;

  beforeEach(() => {
    req = { body: { title: 'Test Task'} };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  });

  it('should return all tasks', async () => {
    const tasks = [{ title: 'Task 1' }, { title: 'Task 2' }];
    Task.find = jest.fn().mockResolvedValue(tasks);

    await all(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(tasks);
  });


  it('should get a task by ID', async () => {
    req = {params: {id: 'MockID'}};
    const mockTask = {
      title: 'Test Task',
    };

    Task.findById = jest.fn().mockResolvedValue(mockTask);

    await get(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTask);
  });

  it('should return 404 for a non-existent task', async () => {
    req = {
      params: { id: 'mockedTaskId' },
    };

    Task.findById = jest.fn().mockResolvedValue(null); // No task found

    await get(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Task not found' });
  });

  it('should update a task', async () => {
    req = {
      params: { id: 'mockedTaskId' },
      body: { title: 'Updated Task' },
    };

    const mockUpdatedTask = {
      title: 'Updated Task',
    };

    Task.findByIdAndUpdate = jest.fn().mockResolvedValue(mockUpdatedTask);

    await update(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUpdatedTask);
  });

  it('should delete a task', async () => {
    req = {
      params: { id: 'mockedTaskId' },
    };

    const mockDeletedTask = {
      title: 'Deleted Task',
    };

    Task.findByIdAndDelete = jest.fn().mockResolvedValue(mockDeletedTask);

    await remove(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith({ message: "Task deleted successfully" });
  });

  it('should create a new task', async () => {
    const mockSavedTask = {
      title: 'Test Task',
    };

    Task.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(mockSavedTask),
    }));

    await create(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockSavedTask);
  });
});