import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div>
      <Link to="/tareas">APP Tareas</Link>
      <Link to="/tareas-crear">Crear Tareas</Link>
    </div>
  )
}
