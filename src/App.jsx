import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import AuthProvider from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/detalle/:id' element={<Detail />} />
          <Route path='/about' element={<h1>About us</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
