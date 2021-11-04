import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/suj-s-009'
});


export default instance;
