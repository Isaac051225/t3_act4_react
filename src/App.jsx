
// Importamos el hook useState desde React
import { useState } from 'react'
import './App.css'
import TodoApp from './components/TodoApp'

function App() {
  //tareas es el valor actual y setTareas es la ÚNICA forma de cambiarlo.
  const [tareas, setTareas] = useState([
    { id: 1, text: 'Ver el video de React', completada: true },
    { id: 2, text: 'Crear mi proyecto', completada: false },
  ])

  const agregarTarea = (text) => {
    setTareas([...tareas, { id: crypto.randomUUID(), text, completada: false }])
  }

  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    )
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  return (
    <section className="container">
      <TodoApp
        tareas={tareas}
        agregarTarea={agregarTarea}
        toggleTarea={toggleTarea}
        eliminarTarea={eliminarTarea}
      />
    </section>
  )
}

export default App