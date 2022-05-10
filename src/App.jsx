import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './layout/Layout';
import { EditarCliente } from './page/EditarCliente';
import { VerCliente } from './page/VerCliente';
import { Inicio } from './page/Inicio';
import { NuevoCliente } from './page/NuevoCliente';


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />}/>
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
          <Route path=":id" element={<VerCliente />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
