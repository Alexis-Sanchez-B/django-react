import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {creaTarea, eliminaTarea, actualizaTarea, getTarea} from '../api/tareas.api'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'

export function TaskForm() {

  const {register, handleSubmit, formState:{errors}, setValue } = useForm();
  const navigate = useNavigate();
  /*Muestra los parametros de la URL para este caso el ID */
  const params = useParams();
  console.log(params)

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await actualizaTarea(params.id, data)
      toast.success('Tarea Actualizada',{
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    }else{
      await creaTarea(data)
      toast.success('Tarea Creada',{
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
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
    <div className="max-w-xl mx-auto">
     <form onSubmit={onSubmit}>
      <input type="text" 
      placeholder="Ingrese Titulo" 
      {...register("titulo",{required: true})} 
      className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      ></input>
      {errors.titulo && <span>Ingrese un Titulo para la Tarea</span>}
      <textarea rows="3" 
      placeholder="Ingrese Descripcion" 
      {...register("descripcion",{required: true})} 
      className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      ></textarea>
      {errors.descripcion && <span>Ingrese una descripcion</span>}
      <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3" >Guardar</button>
     </form>
     
     {/*condicion para que muestre el boton solo si params viene con un ID */
     params.id && 
     <div className="flex justify-end">
      <button className="bg-red-500 p-3 rounded-lg w48 mt-3"
      onClick={ async ()=>{
      const confirmacion = window.confirm('Estas Seguro que quieres Eliminar la Tarea?')
      if (confirmacion) {
        await eliminaTarea(params.id)
        toast.success('Tarea Eliminada',{
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff"
          }
        })
        navigate('/tareas')
      }
     }}>Eliminar Tarea</button>
     </div>
     }
    </div>
  )
}
