import axios from 'axios';

const domain = 'http://67.207.76.105:5000';

const config = {
  baseURL: domain,
  timeout: 100000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Pragma: 'no-cache',
  },
};

const api = axios.create(config);

export default api;
