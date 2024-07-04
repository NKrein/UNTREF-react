import { useState, useTransition } from "react"

const Content = (props) => {
  const [parrafo, setParrafo] = useState('')

  // const [isLoading, setIsLoading] = useState(false)
  // En lugar de gestionar una transicion de manera "manual" con un estado, podemos usar el useTransition
  // [ transicionPendiente, funcionManejadoraDeInicioDeTransicion ]
  const [isLoading, startTransition] = useTransition()


  // // Trabajando con el useEffect
  // useEffect(() => {
  //   // Ejecucion programada
  //   console.log('Se monto el componente')
  //   return () => {
  //     console.log('Se desmonto el componente')
  //   }
  // }, []) // <- Array de dependencias

  // useEffect(() => {
  //   // Ejecucion programada
  //   console.log('Se monto el componente por primera vez y se ejecuta en cada cambio')
  // }, [props, parrafo]) // <- Array de dependencias

  const toggleParrafo = () => {
    // setIsLoading(true)
    // if (parrafo === '') {
    //   setParrafo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia, saepe illum amet at error ullam aliquid quas pariatur vel harum magni reiciendis libero possimus blanditiis quibusdam magnam vero beatae.')
    // } else {
    //   setParrafo('')
    // }
    // setIsLoading(false)
    startTransition(async () => { // <- Le indicamos donde comienza la transicion
      if (parrafo === '') {
        setParrafo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia, saepe illum amet at error ullam aliquid quas pariatur vel harum magni reiciendis libero possimus blanditiis quibusdam magnam vero beatae.')
      } else {
        setParrafo('')
      }
    })
  }

  if (isLoading) { // Si la transicion esta pendiente, entonces mostramos una pantalla de carga en la UI
    return <h1>Cargando Parrafo...</h1>
  }

  return (
    <main>
      <button onClick={toggleParrafo}>Mostrar/Ocultar párrafo</button>
      <p>
        {parrafo}
      </p>
    </main>
  )
}

export default Content