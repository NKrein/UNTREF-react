import React, { useCallback, useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import AuthProvider from './context/AuthProvider' // <- Importamos el provider del contexto que creamos
import Contador from './components/Contador'

const App = (props) => {

  return (
    <AuthProvider> {/* <- Acá utilizamos el contexto, para envolver la aplicacion */}
      <section>
        <Navbar />
        <Content />
        <Contador />
      </section>
    </AuthProvider>
  )
}

export default App
