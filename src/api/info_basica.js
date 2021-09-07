import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/suj-d-003'
});


export default instance;
