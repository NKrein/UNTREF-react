import { useContext } from "react"
import { authContext } from "../context/AuthProvider"
import { Link } from "react-router-dom"

function Navbar() {
  const { usuario } = useContext(authContext)

  if (!usuario) {
    return (
      <nav>
        Inicie sesión
      </nav>
    )  
  }

  return (
    <nav>
      <Link to={'/'} className="nav-link">Inicio</Link>
      <Link to={'/catalogo'} className="nav-link">Catalogo</Link>
      <Link to={'/about'} className="nav-link">About</Link>
    </nav>
  )
}

export default Navbar