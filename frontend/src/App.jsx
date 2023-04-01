import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AdminsLayout from './layout/AdminsLayout';
import UsuariosLayout from './layout/UsuariosLayout';
import AdminInicio from './pages/admin/AdminInicio';
import LeerArchivo from './pages/admin/LeerArchivo';
import Login from './pages/Login';
import Perfil from './pages/socio/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsuariosLayout />}>
          <Route index element={<Login />}/>
          <Route path='/perfil/:dni' element={<Perfil />}/>
        </Route>

        <Route path='/admin' element={<AdminsLayout />}>
          <Route index element={<AdminInicio />}/>
          <Route path='/admin/cargar-archivo' element={<LeerArchivo />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
