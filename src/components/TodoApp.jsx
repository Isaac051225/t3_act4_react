import { useState } from 'react'

function TodoApp({ tareas, agregarTarea, toggleTarea, eliminarTarea }) {
   //guarda lo que el usuario escribe en el input.
  const [texto, setTexto] = useState('')

 //evento
  const manejarEnvio = (e) => {
    e.preventDefault()
    if (texto.trim() === '') return
    agregarTarea(texto.trim())
    setTexto('')
  }

  // Calculamos cuántas tareas no están completadas
  const pendientes = tareas.filter((t) => !t.completada).length

  return (
    <>
      <h1>Mi lista de tareas</h1>

      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <p className="contador">Pendientes: {pendientes}</p>

      {tareas.length === 0 ? (
        <p>No hay tareas, ¡agrega una!</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
              <span onClick={() => toggleTarea(tarea.id)}>{tarea.text}</span>
              <button onClick={() => eliminarTarea(tarea.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default TodoApp