import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const getTodos = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

export const createTodo = async (title) => {
  const response = await axios.post(`${API_URL}/todos`, { title });
  return response.data;
};

export const updateTodo = async (id, updates) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, updates);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/todos/${id}`);
};