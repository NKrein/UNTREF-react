import { useContext } from "react" 
import { authContext } from "../context/AuthProvider" 

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

  return (
    <nav>
      {links.map((elemento, index) => <a key={index} href={elemento.url}>{elemento.title}</a>)}
    </nav>
  )
}

export default Navbar