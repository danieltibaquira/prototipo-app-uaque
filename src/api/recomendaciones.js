import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/suj-i-009'
});


export default instance;
