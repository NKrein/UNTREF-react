import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'


const App = (props) => {
  // [ valor del estado , funcion para manejar estado ] = useState(valorInicial)
  const [contador, setContador] = useState(0)

  const sumar = (e) => {
    setContador(contador + 1) // <-- Le pasamos el nuevo valor entre los parentesis
  }

  if (contador > 10) {
    return (
      <p>No se puede contar mas de 10</p>
    )
  }

  return (
    <section>
      <Navbar />
      <Content contador={contador}/>
      <h2>{contador}</h2>
      {/* Ejecutamos la funcion cuando el usuario hace click en el botón */}
      <button onClick={sumar}>Sumar</button>
    </section>
  )
}

export default App
