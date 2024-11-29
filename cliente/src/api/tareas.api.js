import axios from 'axios';

export const getTodasTareas = () => {
    return axios.get('http://localhost:8000/tareas/api/v1/tareas/');
};
