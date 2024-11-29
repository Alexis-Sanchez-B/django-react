import {useForm} from 'react-hook-form'
import {creaTarea, eliminaTarea} from '../api/tareas.api'
import {useNavigate, useParams} from 'react-router-dom'

export function TaskForm() {

  const {register, handleSubmit, formState:{errors} } = useForm();
  const navigate = useNavigate();
  /*Muestra los parametros de la URL para este caso el ID */
  const params = useParams();
  console.log(params)

  const onSubmit = handleSubmit(async data => {
    await creaTarea(data)
    navigate('/tareas')
  })

  return (
    <div>
     <form onSubmit={onSubmit}>
      <input type="text" placeholder="Ingrese Titulo" {...register("titulo",{required: true})} ></input>
      {errors.titulo && <span>Ingrese un Titulo para la Tarea</span>}
      <textarea rows="3" placeholder="Ingrese Descripcion" {...register("descripcion",{required: true})} ></textarea>
      {errors.descripcion && <span>Ingrese una descripcion</span>}
      <button>Crear Tarea</button>
     </form>
     
     {/*condicion para que muestre el boton solo si params viene con un ID */
     params.id && <button onClick={ async ()=>{
      const confirmacion = window.confirm('Estas Seguro que quieres Eliminar la Tarea?')
      if (confirmacion) {
        await eliminaTarea(params.id)
        navigate('/tareas')
      }

     }}>Eliminar Tarea</button>
     }
    </div>
  )
}
