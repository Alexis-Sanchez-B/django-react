import {useEffect} from 'react'
import {getTodasTareas} from '../api/tareas.api'

export function ListarTarea() {
  
  useEffect(() => {
    
    async function loadTareas(){
        const res =  await getTodasTareas()
        console.log(res);
    }
    loadTareas();
  }, [])

    return (
    <div>
        Listado de Tareas
    </div>
  )
}
