import React, { useContext, useState } from 'react'
import { authContext } from '../context/AuthProvider'
import { Button, TextField } from '@mui/material'
import { errorContext } from '../context/ErrorContext'

const LoginForm = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { nuevoUsuario } = useContext(authContext)
  const { showError } = useContext(errorContext) // <- Nos traemos la funcion para los errores

  const handleUser = (e) => {
    const input = e.target.value
    setUser(input)
  }

  const handlePassword = (e) => {
    const input = e.target.value
    setPassword(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Utilizamos el bloque Try/Catch para el manejo de errores
    try {
      if (user.length < 3) {
        throw new Error('El usuario tiene que tener al menos 3 caracteres.')
      }

      if (password.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres.');
      }

      if (user !== 'Nico') {
        throw new Error('El usuario es incorrecto.');
      }

      if (password !== '123123') {
        throw new Error('Contraseña incorrecta.');
      }

      // Si pasa todas las validaciones, entonces no entra al catch ni muestra el error
      e.target.reset()
      nuevoUsuario(user)
    } catch (error) {
      // Si entra al catch, usamos la funcion "showError" del contexto "errorContext" para mostrar el mensaje
      showError(error.message)
    }
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <TextField id="user" label="Usuario" variant="standard" onChange={handleUser} />
      <TextField id="password" label="Contraseña" variant="standard" onChange={handlePassword} type='password' />
      <Button variant="outlined" type='submit'>Iniciar sesión</Button>
    </form>
  )
}

export default LoginForm