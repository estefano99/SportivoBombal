import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminsLayout from './layout/AdminsLayout';
import UsuariosLayout from './layout/UsuariosLayout';
import AdminInicio from './pages/admin/AdminInicio';
import LeerArchivo from './pages/admin/LeerArchivo';
import Login from './pages/Login';
import Perfil from './pages/socio/Perfil';

import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* UNICA RUTA PUBLICA */}
          <Route path='/' element={<Login />} />

          {/* RUTA PROTEGIDA DEL SOCIO */}
          <Route path='/perfil' element={<UsuariosLayout />}>
            <Route path=':dni' element={<Perfil />} />
          </Route>

          {/* RUTAS PROTEGIDA DEL ADMIN */}
          <Route path='/admin' element={<AdminsLayout />}>
            <Route index element={<AdminInicio />} />
            <Route path='cargar-archivo' element={<LeerArchivo />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
