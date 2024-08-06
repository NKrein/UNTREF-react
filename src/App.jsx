import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import AuthProvider from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'

const App = () => {
  /**
   * Pasos a seguir para utilizar React Router Dom
   * 1) Envolvemos nuestra aplicacion con el BrowserRouter
   * 2) Utilizamos el componente Routes para definir el espacio que va a cambiar en cada ruta
   * 3) Dentro de Routes, definimos cada una de las rutas usando el componente Route
   *    - Usamos la prop "path" para definir la ruta especifica
   *    - Utilizamos "element" para definir el componente que vamos a mostrar en dicha ruta
   *    - Para definir parametros dinamicos, usamos los dos puntos "/:nombreParametro"
   */

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/detalle/:id' element={<Detail />} />
          {/* <Route path='/categoria/:categoria' element={<Content />} /> */}
          <Route path='/about' element={<h1>About us</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
