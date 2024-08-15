import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import AuthProvider from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import Login from './components/Login'
import ErrorContext from './context/ErrorContext'

const App = () => {
  return (
    // Utilizamos el contexto de error para envolver a toda nuestra aplicacion
    // Manejamos los errores de manera global
    <ErrorContext>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Agregamos una ruta para el login y el catalogo */}
            <Route path='/' element={<Login />} />
            <Route path='/catalogo' element={<Content />} />
            <Route path='/detalle/:id' element={<Detail />} />
            <Route path='/about' element={<h1>About us</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorContext>
  )
}

export default App
