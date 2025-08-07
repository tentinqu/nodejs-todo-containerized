const request = require('supertest');
const app = require('../src/index');

describe('Todo API', () => {
  let todoId;

  test('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({
        title: 'Test todo'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test todo');
    expect(res.body.completed).toBe(false);
    todoId = res.body.id;
  });

  test('should get all todos', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  test('should update a todo', async () => {
    const res = await request(app)
      .put(`/api/todos/${todoId}`)
      .send({
        completed: true
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.completed).toBe(true);
  });

  test('should delete a todo', async () => {
    const res = await request(app).delete(`/api/todos/${todoId}`);
    expect(res.statusCode).toBe(204);
  });
});