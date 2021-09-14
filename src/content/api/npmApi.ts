import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.npms.io/v2',
});

export default api;
