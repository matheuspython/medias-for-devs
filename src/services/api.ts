import axios from 'axios';

const api = axios.create({
  baseURL: "https://minha-api-pessoal.herokuapp.com/"
});

export default api;