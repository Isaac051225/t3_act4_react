# React + Vite

# t3_act4_react - Lista de tareas con React

## Descripción del proyecto

Mini aplicación de lista de tareas hecha con React y Vite para la actividad 4 del tema 3. 
Permite:

- Agregar tareas nuevas con un campo de texto.
- Marcar una tarea como completada (se tacha al hacer clic en ella).
- Eliminar tareas.
- Ver cuántas tareas están pendientes.
- Mostrar un mensaje cuando no hay tareas.

## Tecnologías

- React
- Vite
- JavaScript
- gh-pages (para el despliegue en GitHub Pages)

## Estructura de componentes

- `App.jsx`: componente principal. Guarda las tareas en un estado con `useState` y define las funciones para agregar, completar y eliminar.
- `components/TodoApp.jsx`: recibe las tareas y las funciones por props. Muestra el formulario y la lista renderizada con `.map()`.

## Respuestas

### a) ¿Qué diferencia hay entre props y state en React?

Las props son datos que un componente padre le envía a un componente hijo. El hijo las puede usar y mostrar, pero no puede cambiarlas. El state es la información que el propio componente guarda y que sí puede cambiar mientras la app se usa y cuando el state cambia, React actualiza lo que se ve en pantalla.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La key es un identificador único para cada elemento de la lista. Le permite a React saber cuál elemento cambió, se agregó o se eliminó, para actualizar solo lo necesario en lugar de redibujar toda la lista. Sin keys, React puede confundir elementos y mostrar datos incorrectos al agregar o borrar.

### c) ¿Qué hace la función useState y dónde la usé?

`useState` es un hook que permite que un componente pueda "recordar" un valor y que la pantalla se actualice cuando ese valor cambie. Se le da un valor inicial y regresa dos cosas: el valor actual y una función para cambiarlo.
La usé en dos partes de mi mini aplicación:
- En `App.jsx`, con `const [tareas, setTareas] = useState([...])`, para guardar la lista de tareas. Cuando agrego, tacho o elimino una tarea uso `setTareas` y la lista se actualiza sola.
- En `TodoApp.jsx`, con `const [texto, setTexto] = useState('')`, para guardar lo que el usuario va escribiendo en el input antes de agregar la tarea.

### d) Enlace del repositorio de GitHub

https://github.com/Isaac051225/t3_act4_react

### e) Enlace del proyecto desplegado en GitHub Pages

https://isaac051225.github.io/t3_act4_react/