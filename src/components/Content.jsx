import { useEffect, useState } from "react"
import Card from "./Card"

const Content = (props) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error al obtener los productos', error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p>CARGANDO PRODUCTOS...</p>
  }

  return (
    <main>
      {products.map(item => <Card key={item.id} product={item} />)}
    </main>
  )
}

export default Content