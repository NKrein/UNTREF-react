import { createContext, useState } from "react"

export const authContext = createContext()

const AuthProvider = (prop) => {

  const [user, setUser] = useState('anonimo')

  const globalValue = {
    usuario: user
  }

  return (
    <authContext.Provider value={globalValue}>
      {prop.children}
    </authContext.Provider>
  )
}

export default AuthProvider