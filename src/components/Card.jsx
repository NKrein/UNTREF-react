import { Link } from "react-router-dom"
import Contador from "./Contador"

const Card = ({ product }) => {

  /**
   * Para el caso del uso de Link con parametros dinamicos, simplemente los colocamos en la ruta
   * En el lugar donde definimos el parametro dinamico, colocamos el dato que queremos mandar mediante la URL
   * Este ejemplo lo hicimos mandando el "id" del producto, para la pantalla del detalle
   */
  return (
    <div className='card'>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Contador />
      <Link to={`/detalle/${product.id}`} className='card-link'>Ver detalle</Link>
    </div>
  )
}

export default Card