import React, { useState } from 'react'
import './App.css'

function Titulo(props) { // <-- Recibimos las props por parametro

  let nombre = props.nombre // <-- Utilizamos la propiedad "nombre" que contiene el objeto "props"
  if (nombre === "") {
    nombre = "usuario"
  }

  return (
    <>
      <h1 className='dark-mode'>
        {/* Mostramos el nombre que recibimos por props, que almacenamos en la variable "nombre" */}
        ¡Hola {nombre}! Estoy siendo renderizado desde JS
      </h1>
      {/* Mostramos el valor del contador, que recibimos por props bajo el nombre de "numero" */}
      <p>Bienvenido a nuestra APP, que se renderizó {props.numero} veces.</p>
    </>
  )
}


const App = (props) => {
  // [ valor del estado , funcion para manejar estado ] = useState(valorInicial)
  const [contador, setContador] = useState(0)

  const sumar = () => {
    // Ejecutamos la funcion para cambiar le valor del estado
    setContador(contador + 1) // <-- Le pasamos el nuevo valor entre los parentesis
  }

  return (
    <>
      {/* Ejecutamos el componente "Titulo" y le pasamos las propiedades como si fueran atributos  */}
      <Titulo nombre='Martin' numero={contador}/>
      {/* Mostramos el valor actual del contador, para eso usamos las llaves y el nombre del estado */}
      <h2>{contador}</h2>
      {/* Ejecutamos la funcion cuando el usuario hace click en el botón */}
      <button onClick={sumar}>Sumar</button>
    </>
  )
}

export default App
