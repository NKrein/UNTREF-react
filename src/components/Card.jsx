
const Card = ({ product }) => {
  return (
    <div className='card'>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  )
}

export default Card