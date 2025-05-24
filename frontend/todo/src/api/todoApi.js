import axios from 'axios';

const API_URL = 'https://localhost:7041/api/Todos';

export const fetchTodos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addTodo = async (title, isCompleted = false) => {
  const res = await axios.post(API_URL, { title, isCompleted });
  return res.data;
};

export const updateTodo = async (todo) => {
  const res = await axios.put(`${API_URL}/${todo.id}`, todo);
  return res.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const patchTodo = async (id, data) => {
  const res = await axios.patch(`${API_URL}/${id}`, data);
  return res.data;
};
