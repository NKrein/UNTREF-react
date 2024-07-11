
const Card = ({ product }) => {
  // Recibimos la infomracion del producto por props, previamente desestructurando las props par acceder directamente al producto
  // Mostramos dentro del return, cada una de las propiedades del producto.
  return (
    <div className='card'>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  )
}

export default Card