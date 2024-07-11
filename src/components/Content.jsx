import { useEffect, useState } from "react"
import Card from "./Card"

const Content = (props) => {

  // Creamos los estados para manejar la informacion, y controlar la UI
  const [products, setProducts] = useState([]) // <- Para la respuesta de la API
  const [loading, setLoading] = useState(true) // <- Para indicar en la UI que se esta cargando

  // Usamos promesas en el caso que lo necesitemos (operaciones asincronas internas y logica compleja)
  const getProducts = new Promise((resolve, reject) => {
    // Ejecutamos todo el proceso asincrono necesario para retornar la info
    // Usamos el resolve()

    // En caso de error, usamos reject()
  })

  useEffect(() => {
    // Ejecutamos el fectch, retornando una promesa que tenemos que manejar
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error al obtener los productos', error))
      .finally(() => setLoading(false)) // <- Seteamos el "loading" en false para indicar que se termino de cargar
  }, []) // <- Se ejecuta unicamente al montar el componente

  console.log(products) // Verificamos en consola que estemos recibiendo los datos, al cambiar el estado

  // Usamos un condicional para indicar que esta cargando, en caso de que "loading" sea true
  if (loading) {
    return <p>CARGANDO PRODUCTOS...</p>
  }

  return (
    <main>
      {/* 
        Iteramos el array de productos (estado), y en cada iteracion mostramos el elemento JSX o componente que deseamos.
        Debemos utilizar la prop "key" para que React pueda optimizar la lista de componentes. Debe ser un valor unico para cada elemento.
      */}
      {products.map(item => <Card key={item.id} product={item} />)}
    </main>
  )
}

export default Content