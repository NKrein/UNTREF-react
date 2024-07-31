import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import AuthProvider from './context/AuthProvider'
import Contador from './components/Contador'

const App = () => {

  return (
    <AuthProvider>
      <section>
        <Navbar />
        <Content />
        <Contador />
      </section>
    </AuthProvider>
  )
}

export default App
