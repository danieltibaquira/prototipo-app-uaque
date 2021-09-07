import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/suj-e-004'
});


export default instance;
