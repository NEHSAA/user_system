import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  timeout: 2000,
  // headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;
