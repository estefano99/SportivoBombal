import {Outlet, Navigate} from 'react-router-dom';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';

const AdminsLayout = () => {
  const { auth, cargando } = useAuth();

  return (
    <>
      <main>
      {/* SI EN EL OBJETO AUTH HAY UNA PROPIEDAD LLAMADA codigoSocio */}
      {auth.tipoUsuario === "admin" ? <Outlet /> : <Navigate to="/" />}
      <Footer />
    </main>
    </>
  )
}

export default AdminsLayout