import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {TaskPage} from './pages/TaskPage'
import {TaskForm} from './pages/TaskForm'
import {Navigation} from './components/Navigation'


function App(){
  return(
    <BrowserRouter>

    <Navigation/>
    
    <Routes>
    <Route path="/" element={ <Navigate to="/tareas"/>}/>
    <Route path="/tareas" element={<TaskPage/>} />
    <Route path="/tareas-crear" element={<TaskForm/>} />
    <Route path="/tareas/:id" element={<TaskForm/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App