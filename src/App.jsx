import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginLayout from './pages/layout/LoginLayout';
import SubirExcel from './pages/SubirExcel';
import PerfilSocio from './pages/PerfilSocio';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginLayout />}>
          <Route index element={<SubirExcel />} />
          <Route path='/perfil-socio/:codigo' element={<PerfilSocio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;