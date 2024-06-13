import './App.css'

const App = (props) => {

  let nombre = ""
  if (nombre === "") {
    nombre = "usuario"
  }

  function saludar () {
    alert(`Bienvenido ${nombre}`)
  }

  return (
    <>
      <h1 className='dark-mode'>
        ¡Hola {nombre}!
      </h1>
      <button onClick={saludar}>Quiero que me saluden.</button>
    </>
  )
}

export default App
