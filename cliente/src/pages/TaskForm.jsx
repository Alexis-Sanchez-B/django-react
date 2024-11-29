import {useForm} from 'react-hook-form'
import {creaTarea} from '../api/tareas.api'
import {useNavigate} from 'react-router-dom'

export function TaskForm() {

  const {register, handleSubmit, formState:{errors} } = useForm();
  const navigate = useNavigate();

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
    </div>
  )
}
