import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Contador from './Contador'

const Detail = () => {

  const [product, setProduct] = useState({})

  // Recibimos el parametro esperado, y desestructuramos el objeto que nos retorna
  // En este caso, se trata del "id" del producto
  const { id } = useParams()

  useEffect(() => {
    // Usamos el id que recibimos en el parametro dinamico, para nuestra logica
    fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data => {
        const product = data.find(item => item.id === Number(id))
        setProduct(product)
      }) // <- Seteamos en el estado el valor recibido, y lo mostramos en el return
      .catch(error => console.error('Error al obtener los productos', error))
  }, [])


  return (
    <div>
      <h1>Detalle del producto</h1>
      {/* Podemos utilizar el componente Contador, tanto en el detalle, como tambien en otros componentes */}
      <Contador /> 
      <h2>{product.title}</h2>
      <img src={product.image} />
    </div>
  )
}

export default Detail