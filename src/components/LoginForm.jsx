import React, { useContext, useState } from 'react'
import { authContext } from '../context/AuthProvider'

const LoginForm = () => {

  /**
   * Pasos a seguir para manejar un formulario:
   * 1) Definimos los estados que queremos manejar (uno por cada input)
   * 2) Definimos las funciones manejadoras que necesitamos para cada input
   * 3) Colocamos dichas funciones con el evento onChange de cada input
   * 4) Definimos una funcion para manejar el envio del formulario
   * 5) Utilizamos el evento onSubmit para la accion del formulario
   * 6) Realizamos validaciones de la informacion que el usuario ingresa
   */

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { nuevoUsuario } = useContext(authContext)

  const handleUser = (e) => {
    const input = e.target.value
    // if (input.length < 3) {
    //   setError('El usuario tiene que tener al menos 3 caracteres.')
    // } else {
    //   setError('')
    // }
    setUser(input)
  }

  const handlePassword = (e) => {
    const input = e.target.value
    setPassword(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (user.length < 3) {
      setError('El usuario tiene que tener al menos 3 caracteres.')
      return
    } else {
      setError('')
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    } else {
      setError('')
    }

    if (user !== 'Nico') {
      setError('El usuario es incorrecto')
      return
    } else {
      setError('')
    }

    if (password !== '123123') {
      setError('Contraseña incorrecta')
      return
    } else {
      setError('')
    }

    e.target.reset()
    nuevoUsuario(user)
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <label htmlFor="user">Usuario</label>
      <input id='user' type="text" onChange={handleUser} />
      <label htmlFor="password">Contraseña</label>
      <input id='password' type="password" onChange={handlePassword} />
      <button>Ingresar</button>
      <span>{error}</span>
    </form>
  )
}

export default LoginForm