const request = require('supertest');
const express = require('express');
const app = express();

// Import your route handlers
app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from Node.js!');
  });
});

describe('Test non-existent path', () => {
  test('It should return 404 for unknown routes', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.statusCode).toBe(404);
  });
});
