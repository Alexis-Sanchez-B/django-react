import axios from 'axios';

const tareasApi = axios.create({
    baseURL: 'http://localhost:8000/tareas/api/v1/tareas/'
})

export const getTodasTareas = () => {
    return tareasApi.get('/')
};

export const getTarea = (id) => {
    return tareasApi.get(`/${id}/`)
};

export const creaTarea = (tareas) => {
    return tareasApi.post('/',tareas)
}

export const eliminaTarea = (id) => {
    return tareasApi.delete(`/${id}/`) 
}

export const actualizaTarea = (id, tareas) => {
    return tareasApi.put(`/${id}/`,tareas) 
}