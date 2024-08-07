import React from 'react'

const Input = ({ handleChange }) => {
  return (
    <input onChange={handleChange} placeholder='filtrar productos...'/>
  )
}

export default Input