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
  const [user, setUser] = useState('No hay clicks aun.')
  const [mensaje, setMensaje] = useState('')

  const sumar = (e) => {
    console.log(e)
    if (!isNaN(e)) {
      setContador(contador + e)
      // Usamos el return para cortar la ejecucion de la funcion aca (cortocircuito, return temprano)
      return
    }
    // Podemos recibir la informacion del evento por parametros (e)
    e.preventDefault()
    // Ejecutamos la funcion para cambiar le valor del estado
    setContador(contador + 1) // <-- Le pasamos el nuevo valor entre los parentesis
    if (contador < 20) {
      setUser('Juan hizo click ' + (contador + 1) + ' veces.')
    } else {
      setUser('Se clickeo mas de 20 veces')
    }
  }

  const tecla = (e) => {
    const name = e.target.value
    setUser(name)
  }

  const verificarNombre = (e) => {
    e.preventDefault()
    alert('Se verifico el nombre.')
  }

  const advertirSalida = () => {
    setMensaje('Se salió del input')
  }

  const reiniciarFoco = () => {
    setMensaje('')
  }

  const handleSize = (e) => {
    console.log(e)
  }

  const handleDrag = (e) => {
    console.log(e)
  }

  return (
    <section onResize={handleSize}>
      {/* Ejecutamos el componente "Titulo" y le pasamos las propiedades como si fueran atributos  */}
      <Titulo nombre='Martin' numero={contador} />
      {/* Mostramos el valor actual del contador, para eso usamos las llaves y el nombre del estado */}
      <p>{user}</p>
      <h2>{contador}</h2>
      {/* Ejecutamos la funcion cuando el usuario hace click en el botón */}
      <button onClick={sumar}>Sumar</button>
      {/* Cuando necesitamos pasarle un parametro a la funcion, la ejecutamos dentro de un callback */}
      <button onClick={() => sumar(5)}>Sumar 5</button>
      <form onSubmit={verificarNombre} onDragStart={handleDrag}>
        <label htmlFor='name'>Nombre de usuario</label>
        {/* <input id='name' type="text" onKeyDown={tecla} onKeyUp={() => console.log('se solto la tecla')} /> */}
        <input id='name' type="text" onChange={tecla} onBlur={advertirSalida} onFocus={reiniciarFoco}/>
        <span>{mensaje}</span>
        <button>Verificar</button>
      </form>

    </section>
  )
}

export default App
