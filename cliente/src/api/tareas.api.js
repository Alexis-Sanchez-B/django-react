import axios from 'axios';

const tareasApi = axios.create({
    baseURL: 'http://localhost:8000/tareas/api/v1/tareas/'
})

export const getTodasTareas = () => {
    return tareasApi.get('/')
};

export const creaTarea = (tareas) => {
    return tareasApi.post('/',tareas)
}