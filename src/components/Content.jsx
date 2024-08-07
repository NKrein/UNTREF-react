import { useEffect, useState } from "react"
import Card from "./Card"
import Input from "./Input"

const Content = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleProductsFilter = (event) => {
    const inputValue = event.target.value
    if (inputValue) {
      const filtered = products.filter(item => item.title.includes(inputValue))
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts([])
    }
  }

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
      <div>
        <Input handleChange={handleProductsFilter} />
      </div>
      {filteredProducts.length > 0
        ? filteredProducts.map(item => <Card key={item.id} product={item} />)
        : products.map(item => <Card key={item.id} product={item} />)
      }
    </main>
  )
}

export default Content