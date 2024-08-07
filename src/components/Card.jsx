import { Link } from "react-router-dom"
import Contador from "./Contador"

const Card = ({ product }) => {
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