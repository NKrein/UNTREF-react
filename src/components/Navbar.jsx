import { useContext } from "react"
import { authContext } from "../context/AuthProvider"
import { Link } from "react-router-dom"

function Navbar() {
  const { usuario } = useContext(authContext)

  return (
    <nav>
      <Link to={'/'} className="nav-link">Inicio</Link>
      <Link to={'/detalle'} className="nav-link">Detalle</Link>
      <Link to={'/about'} className="nav-link">About</Link>
    </nav>
  )
}

export default Navbar