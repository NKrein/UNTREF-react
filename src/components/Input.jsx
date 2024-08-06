import React from 'react'

const Input = ({ handleChange }) => {
  /**
   * Recibimos la funcion por props, y la ejecutamos directamente en el input
   * usando el evento sintetico onChange. No necesitamos mas logica aqui
   */
  return (
    <input onChange={handleChange} placeholder='filtrar productos...'/>
  )
}

export default Input