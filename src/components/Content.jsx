import { useEffect, useState } from "react"
import Card from "./Card"
import Button from "./Button"
import Input from "./Input"
// import { useParams } from "react-router-dom"

const Content = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [hizoClick, setHizoClick] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([]) // <- Definimos este estado para el filtro
  // const { categoria } = useParams()

  /**
   * Podemos definir funciones, para pasarle a otros componentes, y que se 
   * ejecuten por la accion de un evento, dentro de ese componente 
   */
  const handleButtonClick = () => {
    setHizoClick(true)
  }

  /**
   * En este caso, usamos esta funcion para modificar la lista de cards que 
   * se muestran en pantalla, al poder recibir informacion del input (mediante
   * el evento)
   */
  const handleProductsFilter = (event) => {
    const inputValue = event.target.value // <- Recibimos el valor del input
    if (inputValue) { // <- Evaluamos si el usuario ingreso algo. En caso de que asi sea, entonces filtramos
      const filtered = products.filter(item => item.title.includes(inputValue))
      setFilteredProducts(filtered)
    } else { // Caso contrario, seteamos el estado con un array vacio
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
        {/* Importante: Mandar correctamente la funcion por props, para que la reciba correctamente
          * dentro del componente Input.
          */}
        <Input handleChange={handleProductsFilter} />
      </div>
      <Button handleClick={handleButtonClick} text={'Hazme click'} />
      <p>Hizo click: {hizoClick ? 'Si.' : 'No.'}</p>
      {/* Evaluamos si el array de filtrado tiene elementos
        * En caso de que asi sea, entonces mappeamos este estado
        * Caso contrario, mostramos todos los productos (estado "products")
        */}
      {filteredProducts.length > 0
        ? filteredProducts.map(item => <Card key={item.id} product={item} />)
        : products.map(item => <Card key={item.id} product={item} />)
      }
    </main>
  )
}

export default Content