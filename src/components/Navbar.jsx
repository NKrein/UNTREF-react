import { useContext } from "react" 
import { authContext } from "../context/AuthProvider" 
import { Link } from "react-router-dom"

function Navbar() {
  const { usuario } = useContext(authContext) 

  const links = [
    {
      url: '#',
      title: 'Home'
    },
    {
      url: '#products',
      title: 'Producto'
    },
    {
      url: '#contact',
      title: 'Contacto'
    },
    {
      url: '/profile',
      title: `Perfil de ${usuario}` 
    },
  ]

  /**
   * Para conectar las rutas con los links, debemos utilizar las mismas rutas que definimos en los Route
   * Definimos dichas rutas como valor de la prop "to"
   * Este componente puede tener una clase de CSS definida, usando "className"
   */
  return (
    <nav>
      {/* {links.map((elemento, index) => <a key={index} href={elemento.url}>{elemento.title}</a>)} */}
      <Link to={'/'} className="nav-link">Inicio</Link>
      <Link to={'/detalle'} className="nav-link">Detalle</Link>
      <Link to={'/about'} className="nav-link">About</Link>
    </nav>
  )
}

export default Navbar