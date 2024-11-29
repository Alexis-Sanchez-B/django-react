import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {creaTarea, eliminaTarea, actualizaTarea, getTarea} from '../api/tareas.api'
import {useNavigate, useParams} from 'react-router-dom'

export function TaskForm() {

  const {register, handleSubmit, formState:{errors}, setValue } = useForm();
  const navigate = useNavigate();
  /*Muestra los parametros de la URL para este caso el ID */
  const params = useParams();
  console.log(params)

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await actualizaTarea(params.id, data)
    }else{
      await creaTarea(data)
    }
    navigate('/tareas')
  })

  /*Agino valores al formulario para poder actualizar la tarea */
  useEffect(()=> {
    async function cargarTares(){
      if (params.id){
        const res = await getTarea(params.id)
        /*Asigno los valores al formulario */
        setValue('titulo', res.data.titulo)
        setValue('descripcion', res.data.descripcion)
      }
    }
    cargarTares();
  },[])

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
