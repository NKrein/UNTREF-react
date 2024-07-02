import { useContext } from "react" // <- Importamos el useContext para poder usar el contexto
import { authContext } from "../context/AuthProvider" // <- Importamos la definicion de nuestro contexto

function Navbar() {
  /**
   * La ejecucion del useContext, nos va a retornar el objeto
   * que colocamos en el "value" del Provider, en la definicion, 
   * por eso podemos obtener la propiedad al desestrucutrar
   */
  const { usuario } = useContext(authContext) // <- Ejecutamos el use Context, pasandole la definicion del contexto por parametro

  return (
    <nav>
      <a href="#">Home</a>
      <a href="">Producto</a>
      <a href="">Contacto</a>
      <a href="">Perfil de {usuario}</a> {/* <- Acá usamos el estado global del contexto */}
    </nav>
  )
}

export default Navbar