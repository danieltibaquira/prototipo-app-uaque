import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/suj-d-001'
});


export default instance;
