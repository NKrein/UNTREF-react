import React, { useCallback, useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import AuthProvider from './context/AuthProvider' // <- Importamos el provider del contexto que creamos
import Contador from './components/Contador'

const App = (props) => {
  // [ valor del estado , funcion para manejar estado ] = useState(valorInicial)
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1) // <-- Le pasamos el nuevo valor entre los parentesis
  }
  // Usamos el useCallback para memorizar la definicion de la funcion
  // useCallback(funcion, arrayDependencias)
  const sumarMemorizada = useCallback(() => {
    setContador(contador + 1)
  }, [contador])

  const cuantoFaltaPara10 = 10 - contador

  // Usamos useMemo para almacenar un valor, evitando que se ejecute el calculo constantemente (en cada actualizacion)
  // useMemo(funcion, arrayDependencias)
  const cuantoFaltaPara10Memorizado = useMemo(() => {
    return 10 - contador
  }, [contador])

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
        <p>Falta {cuantoFaltaPara10Memorizado} para que el contador llegue a 10.</p>
        <h2>{contador}</h2>
        {/* Ejecutamos la funcion cuando el usuario hace click en el botón */}
        <button onClick={sumar}>Sumar</button>
        <Contador />
      </section>
    </AuthProvider>
  )
}

export default App
