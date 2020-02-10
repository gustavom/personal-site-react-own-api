import axios from 'axios';
// require('dotenv').config();

const api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
