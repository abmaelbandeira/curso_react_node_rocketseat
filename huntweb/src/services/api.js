import axios from 'axios';



//consumindo os dados da minha api
const api = axios.create({ baseURL: 'http://localhost:3001/api' });

export default api;