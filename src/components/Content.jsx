import { useEffect, useState } from "react"

const Content = (props) => {
  const [parrafo, setParrafo] = useState('')

  // Trabajando con el useEffect
  useEffect(() => {
    // Ejecucion programada
    console.log('Se monto el componente')
    return () => {
      console.log('Se desmonto el componente')
    }
  }, []) // <- Array de dependencias

  useEffect(() => {
    // Ejecucion programada
    console.log('Se monto el componente por primera vez y se ejecuta en cada cambio')
    
  }, [props, parrafo]) // <- Array de dependencias

  const toggleParrafo = () => {
    if (parrafo === '') {
      setParrafo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia, saepe illum amet at error ullam aliquid quas pariatur vel harum magni reiciendis libero possimus blanditiis quibusdam magnam vero beatae.')
    } else {
      setParrafo('')
    }
  }

  return (
    <main>
      <button onClick={toggleParrafo}>Mostrar/Ocultar párrafo</button>
      <p>
        {props.contador} - {parrafo}
      </p>
    </main>
  )
}

export default Content