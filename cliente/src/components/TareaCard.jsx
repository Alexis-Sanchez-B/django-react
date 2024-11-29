import {useNavigate} from 'react-router-dom'

export function TareaCard({tareas}) {

  const navigate = useNavigate();

  return (
    <div  onClick={()=> {
      navigate('/tareas/' + tareas.id)
    }}>
    <h1>{tareas.titulo}</h1>
    <p>{tareas.descripcion}</p>
    </div>
  )
}
