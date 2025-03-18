import axios from 'axios';

// Conectamos al backend
const instance = axios.create({
    //dominio base en el que axios consulta al backend
    baseURL: import.meta.env.VITE_API_URL_DEPLOY,
    withCredentials: true    
});

export default instance;