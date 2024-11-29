import {useEffect, useState} from 'react'
import {getTodasTareas} from '../api/tareas.api'
import {TareaCard} from './TareaCard'

export function ListarTarea() {
    /*[] inicia como un arreglo vacio */
    const [tareas, setTareas] = useState([]);

  useEffect(() => {
    
    async function loadTareas(){
        const res =  await getTodasTareas();
        console.log(res);

        /*Guardamos la informacion del GET del back end */
        setTareas(res.data);
    }
    loadTareas();
  }, [])

    return (
    <div className="grid grid-cols-3 gap-3">
        {tareas.map(tareas => (
            <TareaCard key={tareas.id} tareas={tareas} />
        ))}
    </div>
  )
}
