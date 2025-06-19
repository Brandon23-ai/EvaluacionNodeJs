import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '123456',
  },
});

api.get('/')
  .then(() => {
    console.log('Conexión a la API exitosa');
  })
  .catch((error) => {
    console.error('[ERROR]', error.message);
  });

export default api;
