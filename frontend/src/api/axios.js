import axios from 'axios';

// Conectamos al backend
const instance = axios.create({
    //dominio base en el que axios consulta al backend
    baseURL: import.meta.env.VITE_API_URL,  
    // baseURL: 'http://localhost:3002/api',
    withCredentials: true
});

export default instance;