import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

describe('Test the root path', () => {
  it('should respond to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from Node.js!');
  });
});

describe('Test non-existent path', () => {
  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.statusCode).toBe(404);
  });
});
