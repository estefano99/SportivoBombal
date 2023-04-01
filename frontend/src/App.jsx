import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import LeerArchivo from './pages/LeerArchivo';
import UsuariosLayout from './layout/UsuariosLayout';
import AdminsLayout from './layout/AdminsLayout';
import AdminInicio from './pages/AdminInicio';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsuariosLayout />}>
          <Route index element={<Login />}/>
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
