import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import AuthProvider from './context/AuthProvider' // <- Importamos el provider del contexto que creamos

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
    <AuthProvider> {/* <- Acá utilizamos el contexto, para envolver la aplicacion */}
      <section>
        <Navbar />
        <Content />
        <h2>{contador}</h2>
        {/* Ejecutamos la funcion cuando el usuario hace click en el botón */}
        <button onClick={sumar}>Sumar</button>
      </section>
    </AuthProvider>
  )
}

export default App
