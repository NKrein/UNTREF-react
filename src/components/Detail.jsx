import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Contador from './Contador'

const Detail = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data => {
        const product = data.find(item => item.id === Number(id))
        setProduct(product)
      })
      .catch(error => console.error('Error al obtener los productos', error))
  }, [])


  return (
    <div>
      <h1>Detalle del producto</h1>
      <Contador />
      <h2>{product.title}</h2>
      <img src={product.image} />
    </div>
  )
}

export default Detail