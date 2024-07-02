import { createContext, useState } from "react"

// Creamos nuestro contexto, usando la funcion createContext, y la exportamos para luego poder utilizarla
export const authContext = createContext()

// Creamos nuesto componente para definir el Provider
const AuthProvider = (prop) => { // Utilizamos las prop, para acceder a la propiedad "children" en la linea 19

  const [user, setUser] = useState('anonimo') // <- Nuevo estado global

  // Definimos el objeto que vamos a compartir globalmente, y colocamos todas las propiedade que deseamos
  const globalValue = {
    usuario: user
  }

  // Utilizamos la propiedad Provider del contexto creado, para definir el alcance del contexto 
  return (
    <authContext.Provider value={globalValue}> {/* <- Le pasamos como "value" nuestro objeto */}
      {prop.children}
    </authContext.Provider>
  )
}

/**
 * En la propiedad "children" de los componentes de React, recibiremos por defecto a todo aquello
 * que el propio componente envuelve en su ejecucion. En este caso, "children" hace referencia a
 * toda nuestra aplicacion, que estamos envolviendo en App.jsx
 */

export default AuthProvider