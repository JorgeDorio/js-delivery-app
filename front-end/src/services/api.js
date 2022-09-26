import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const submitLogin = async (email, password) => {
  const response = api.post('/login', { email, password })
    .then((res) => {
      const result = res.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const createUser = async (name, email, password) => {
  const response = api.post('/register', { name, email, password })
    .then((res) => {
      const result = res.data;
      return result;
    })
    .catch(() => false);
  return response;
};

export default {
  submitLogin,
  createUser,
};