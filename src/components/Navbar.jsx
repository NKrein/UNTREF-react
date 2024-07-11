import { useContext } from "react" // <- Importamos el useContext para poder usar el contexto
import { authContext } from "../context/AuthProvider" // <- Importamos la definicion de nuestro contexto

function Navbar() {
  /**
   * La ejecucion del useContext, nos va a retornar el objeto
   * que colocamos en el "value" del Provider, en la definicion, 
   * por eso podemos obtener la propiedad al desestrucutrar
   */
  const { usuario } = useContext(authContext) // <- Ejecutamos el use Context, pasandole la definicion del contexto por parametro

  // Creamos un array de elementos, y que cada elemento tenga la URL y el titulo correspondiente a cada link
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
      title: `Perfil de ${usuario}` // <- Acá usamos el estado global del contexto 
    },
  ]

  return (
    <nav>
      {/* Mapeamos el array "links" para mostrar de manera dinamica la informacion en la UI del menu */}
      {links.map((elemento, index) => <a key={index} href={elemento.url}>{elemento.title}</a>)}
    </nav>
  )
}

export default Navbar