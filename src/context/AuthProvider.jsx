import { createContext, useState } from "react"

export const authContext = createContext()

const AuthProvider = (prop) => {

  const [user, setUser] = useState(null)

  const globalValue = {
    usuario: user,
    nuevoUsuario: setUser
  }

  return (
    <authContext.Provider value={globalValue}>
      {prop.children}
    </authContext.Provider>
  )
}

export default AuthProvider